import type { CaseStudy, DiagramNode } from "@/content/profile";

type Props = { id: string; architecture: CaseStudy["architecture"] };

const LINE = 18;

function nodeHeight(node: DiagramNode) {
    return 40 + (node.lines?.length ?? 0) * LINE;
}

function Box({
    x,
    y,
    w,
    h,
    node,
    dashed,
}: {
    x: number;
    y: number;
    w: number;
    h: number;
    node: DiagramNode;
    dashed?: boolean;
}) {
    const cx = x + w / 2;
    const top = y + h / 2 - ((node.lines?.length ?? 0) * LINE) / 2;
    return (
        <g>
            <rect
                x={x}
                y={y}
                width={w}
                height={h}
                rx={10}
                className={
                    dashed
                        ? "fill-muted stroke-muted-foreground"
                        : "fill-card stroke-primary"
                }
                strokeWidth={1.5}
                strokeDasharray={dashed ? "6 4" : undefined}
            />
            <text
                x={cx}
                y={top + 5}
                textAnchor="middle"
                className="fill-foreground"
                fontSize={15}
                fontWeight={600}
            >
                {node.title}
            </text>
            {node.lines?.map((line, i) => (
                <text
                    key={line}
                    x={cx}
                    y={top + 5 + (i + 1) * LINE}
                    textAnchor="middle"
                    className="fill-muted-foreground"
                    fontSize={13}
                >
                    {line}
                </text>
            ))}
        </g>
    );
}

function Marker({ id }: { id: string }) {
    return (
        <defs>
            <marker
                id={id}
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
            >
                <path d="M0 0L10 5L0 10z" className="fill-primary" />
            </marker>
        </defs>
    );
}

// Horizontal layout for wide screens.
function Horizontal({ id, architecture }: Props) {
    const { flow, branch } = architecture;
    const w = 184;
    const gap = 44;
    const pad = 12;
    const h = Math.max(...flow.map(nodeHeight));
    const branchH = branch ? nodeHeight(branch.node) : 0;
    const width = pad * 2 + flow.length * w + (flow.length - 1) * gap;
    const branchGap = 64;
    const height = pad * 2 + h + (branch ? branchGap + branchH : 0);
    const marker = `${id}-h-arrow`;
    const bx = branch ? pad + branch.from * (w + gap) : 0;
    const bw = branch ? Math.min(width - pad - bx, Math.max(w, 260)) : 0;
    const bxAdj = branch ? Math.min(bx, width - pad - bw) : 0;

    return (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" aria-hidden="true">
            <Marker id={marker} />
            {flow.map((node, i) => {
                const x = pad + i * (w + gap);
                return (
                    <g key={node.title}>
                        <Box x={x} y={pad} w={w} h={h} node={node} />
                        {i < flow.length - 1 && (
                            <line
                                x1={x + w + 2}
                                y1={pad + h / 2}
                                x2={x + w + gap - 3}
                                y2={pad + h / 2}
                                className="stroke-primary"
                                strokeWidth={1.5}
                                markerEnd={`url(#${marker})`}
                            />
                        )}
                    </g>
                );
            })}
            {branch && (
                <g>
                    <line
                        x1={bx + w / 2}
                        y1={pad + h + 2}
                        x2={bx + w / 2}
                        y2={pad + h + branchGap - 3}
                        className="stroke-primary"
                        strokeWidth={1.5}
                        strokeDasharray="5 4"
                        markerEnd={`url(#${marker})`}
                    />
                    <text
                        x={bx + w / 2 + 8}
                        y={pad + h + branchGap / 2 + 4}
                        className="fill-muted-foreground"
                        fontSize={13}
                    >
                        {branch.label}
                    </text>
                    <Box
                        x={bxAdj}
                        y={pad + h + branchGap}
                        w={bw}
                        h={branchH}
                        node={branch.node}
                        dashed
                    />
                </g>
            )}
        </svg>
    );
}

// Vertical layout for phones.
function Vertical({ id, architecture }: Props) {
    const { flow, branch } = architecture;
    const pad = 10;
    const x = pad;
    const w = 270;
    const gap = 34;
    const width = 340;
    const marker = `${id}-v-arrow`;
    const ys: number[] = [];
    let y = pad;
    for (const node of flow) {
        ys.push(y);
        y += nodeHeight(node) + gap;
    }
    const branchY = y + 10;
    const height = branch ? branchY + nodeHeight(branch.node) + pad : y - gap + pad;

    return (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" aria-hidden="true">
            <Marker id={marker} />
            {flow.map((node, i) => (
                <g key={node.title}>
                    <Box x={x} y={ys[i]} w={w} h={nodeHeight(node)} node={node} />
                    {i < flow.length - 1 && (
                        <line
                            x1={x + w / 2}
                            y1={ys[i] + nodeHeight(node) + 2}
                            x2={x + w / 2}
                            y2={ys[i + 1] - 3}
                            className="stroke-primary"
                            strokeWidth={1.5}
                            markerEnd={`url(#${marker})`}
                        />
                    )}
                </g>
            ))}
            {branch && (
                <g>
                    <path
                        d={`M ${x + w + 2} ${ys[branch.from] + nodeHeight(flow[branch.from]) / 2} H ${width - 12} V ${branchY + nodeHeight(branch.node) / 2} H ${x + w + 3}`}
                        fill="none"
                        className="stroke-primary"
                        strokeWidth={1.5}
                        strokeDasharray="5 4"
                        markerEnd={`url(#${marker})`}
                    />
                    <Box
                        x={x}
                        y={branchY}
                        w={w}
                        h={nodeHeight(branch.node)}
                        node={branch.node}
                        dashed
                    />
                </g>
            )}
        </svg>
    );
}

export function FlowDiagram({ id, architecture }: Props) {
    return (
        <figure className="rounded-xl border bg-muted/30 p-4 sm:p-6">
            <div role="img" aria-label={architecture.caption}>
                <div className="hidden md:block">
                    <Horizontal id={id} architecture={architecture} />
                </div>
                <div className="mx-auto max-w-sm md:hidden">
                    <Vertical id={id} architecture={architecture} />
                </div>
            </div>
            <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {architecture.caption}
            </figcaption>
        </figure>
    );
}
