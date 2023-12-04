// REACT & LIBRARIES
import { motion } from "framer-motion";

// COMPONENTS
import { TypingText, InsightCard, TitleText } from "../components";

// STYLES
import styles from "../styles";

// CONSTANTS
import { insights } from "../constants";

// UTILITIES
import { staggerContainer } from "../utils";

function Insights() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText title="Insight about metaverse" textStyles="text-center" />

        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => (
            <InsightCard
              key={`insight-${index}`}
              {...insight}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Insights;
