"use client";

import { type CommandResponse, getCommandResponse } from "@/lib/terminal-data";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";

type TerminalLine = {
    type: "input" | "output";
    content: string | CommandResponse;
};

export function Terminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<TerminalLine[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isVisible, setIsVisible] = useState(false);
    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    };

    useEffect(scrollToBottom, [terminalRef]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            setHistory([
                {
                    type: "output",
                    content: {
                        type: "text",
                        content: `Welcome to my interactive terminal!
Type 'help' to see available commands.`,
                    },
                },
            ]);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    const handleCommand = (cmd: string) => {
        setHistory((prev) => [...prev, { type: "input", content: cmd }]);

        if (cmd.trim().toLowerCase() === "clear") {
            setHistory([]);
            return;
        }

        const response = getCommandResponse(cmd);
        setHistory((prev) => [...prev, { type: "output", content: response }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        handleCommand(input);
        setInput("");
        setHistoryIndex(-1);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            const commandHistory = history
                .filter((line) => line.type === "input")
                .map((line) => line.content as string)
                .reverse();

            if (historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            const commandHistory = history
                .filter((line) => line.type === "input")
                .map((line) => line.content as string)
                .reverse();

            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput("");
            }
        }
    };

    const renderOutput = (output: CommandResponse) => {
        switch (output.type) {
            case "text":
                return (
                    <pre className="whitespace-pre-wrap text-terminal-text dark:text-terminal-text-dark">
                        {output.content as string}
                    </pre>
                );
            case "error":
                return (
                    <span className="text-red-500">
                        {output.content as string}
                    </span>
                );
            case "list":
                return (
                    <div className="grid grid-cols-3 gap-2">
                        {(output.content as string[]).map((item, i) => (
                            <span
                                key={i}
                                className="text-terminal-text dark:text-terminal-text-dark"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                );
            case "table":
                const items = output.content as { [key: string]: string }[];
                return (
                    <table className="w-full">
                        <thead>
                            <tr>
                                {Object.keys(items[0]).map((header, i) => (
                                    <th
                                        key={i}
                                        className="text-left text-terminal-text dark:text-terminal-text-dark font-bold"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, i) => (
                                <tr key={i}>
                                    {Object.values(item).map((value, j) => (
                                        <td
                                            key={j}
                                            className="py-1 text-terminal-text dark:text-terminal-text-dark"
                                        >
                                            {value}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                );
            default:
                return null;
        }
    };

    // Scroll indicator animation
    const scrollIndicator = (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-terminal-text dark:text-terminal-text-dark"
        >
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
                <ChevronDown className="w-6 h-6" />
            </motion.div>
        </motion.div>
    );

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto px-4 py-12 relative"
                    onClick={() => inputRef.current?.focus()}
                >
                    <Card className="bg-terminal dark:bg-terminal-dark p-4 font-mono text-sm">
                        <div className="flex gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div
                            ref={terminalRef}
                            className="h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
                        >
                            {history.map((line, i) => (
                                <div key={i} className="mb-2">
                                    {line.type === "input" ? (
                                        <div className="flex">
                                            <span className="text-terminal-prompt dark:text-terminal-prompt-dark">
                                                guest@portfolio:~${" "}
                                            </span>
                                            <span className="ml-2 text-terminal-text dark:text-terminal-text-dark">
                                                {line.content as string}
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="ml-4">
                                            {renderOutput(
                                                line.content as CommandResponse
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <form onSubmit={handleSubmit} className="flex">
                                <span className="text-terminal-prompt dark:text-terminal-prompt-dark">
                                    guest@portfolio:~${" "}
                                </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 ml-2 bg-transparent outline-none text-terminal-text dark:text-terminal-text-dark"
                                    autoFocus
                                />
                            </form>
                        </div>
                    </Card>
                    {scrollIndicator}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
