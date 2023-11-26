import { SelectedPage,ClassType } from '@/shared/types'
import image1 from '@/assets/img1.jpeg';
import image2 from '@/assets/img2.jpeg';
import image3 from '@/assets/img3.jpeg';
import image4 from '@/assets/img4.jpeg';
import image5 from '@/assets/img5.jpeg';
import image6 from '@/assets/img6.jpeg';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './Class'

const classes: Array<ClassType> = [
    {
        name: "Motivation",
        description: "The best motivation for your employees!",
        image:image1
    },
    {
        name: "Angle",
        description: "An individual approach to each company",
        image:image2
    },
    {
        name: "Accompaniment",
        description: "Corporate line of service and support",
        image:image3
    },
    {
        name: "Manager",
        description: "Personal corporate manager",
        image:image4
    },
    {
        name: "Loyalty",
        description: "Devotion to the client and his wishes",
        image:image5
    },
    {
        name: "Modernity",
        description: "Trainers that provide a wide range of physical education and sports activities",
        image:image6
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className='w-full bg-primary-100 py-40'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div className='mx-auto w-5/6'
                    initial='hidden'
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className='md:w-3/5'>
                        <HText>CORPORATE FITNESS</HText>
                        <p className='py-5'>- The best motivation for your employees!</p>
                        <p className='pb-5'>- An individual approach to each company</p>
                        <p className='pb-5'>- Corporate line of service and support</p>
                        <p className='pb-5'>- Personal corporate manager</p>
                        <p className='pb-5'>- The maximum system of discounts and bonuses</p>
                        <p className='pb-5'>- The single most profitable offer for employees and their relatives</p>
                    </div>
                </motion.div>
                <div className='mt-10 h-[320px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {classes.map((item:ClassType, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                    ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses