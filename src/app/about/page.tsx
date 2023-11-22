"use client"
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div className="mt-16"  initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>About</motion.div>
  )
}

export default About