import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Dance classes",
        description: "Fitness training based on various dance styles: Latin, hip-hop, classical, etc. They improve the mood, develop coordination, give a sense of freedom."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Power classes",
        description: "Training with own or additional weight aimed at developing muscular endurance and strength. They help to change the body, make it slim, attractive and healthy."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Special classes",
        description: "Training in which two or more types of loads are combined: work on strength, flexibility, coordination, etc. Read carefully the description of each class in this category."
    }];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* Header section */}
                <motion.div
                    initial='hidden'
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 },
                    }}
                    className="md:my-5 md:w-3/5">
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        Gyms with professional simulators of the best world brands: Precor, Life Fitness, Star Track, Hammer, TechnoGym. The space of the hall includes: a cardio theater, an area of ​​load-block simulators and an area of ​​free weights. All halls are equipped with stretching areas. For fans of functional training, Street Fit Zone is perfect.
                    </p>
                </motion.div>

                {/* Main section */}
                <motion.div
                    className="mt-5 md:flex items-center justify-between gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage} />
                    ))}
                </motion.div>

                {/* Graphics and description  */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* Graphics */}
                    <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic} />

                    {/* description */}
                    <div>
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"></div>
                            <motion.div
                                initial='hidden'
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    
                    {/* Text */}
                    <motion.div
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 },
                        }}>
                        <p className="my-5">Having our own production and service center, a base of original spare parts, a staff of highly qualified specialists and a regional network, we ensure uninterrupted operation of equipment in all clubs.</p>
                        <p className="my-5">Choose a club and get access to unlimited world-class fitness opportunities. The gyms have only modern equipment from the USA and Italy, more than 200 group exercises.
                            Sports, recreational and children's pools are equipped with a multi-level water purification system, in SPA complexes there are Roman steam rooms, Ukrainian baths and Finnish saunas, massage salons, solariums and cozy lounge areas.</p>
                    </motion.div>
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        </div>
                    </div>
                    </div>
                    </div>
            </motion.div>
        </section>
    )
}

export default Benefits