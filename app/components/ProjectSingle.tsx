import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const imageStyle = { maxWidth: '100%', height: 'auto' };

export default function ProjectSingle(props) {
	return (

        <div>
			<Link
				href="/projects/[id]"
				as={'/projects/' + props.id}
				aria-label="Single Project"
				passHref
                >
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<Image
							src={props.img}
							className="rounded-t-xl border-none"
							alt="Single Project"
							layout="responsive"
							width={100}
							height={90}
                            />
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
							{props.title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{props.category}
						</span>
					</div>
				</div>
			</Link>
        </div>
		// {/* </motion.div> */}
	);
};

