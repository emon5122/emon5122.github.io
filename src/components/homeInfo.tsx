import Link from "next/link";

const HomeInfo = ({ currentStage }:{currentStage:number|null}) => {
  if (!currentStage)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I&apos;m
        <span className='font-semibold mx-2 text-white'>Istiak Hassan Emon</span>
        👋
        <br />
        Tech Nerd from Bangladesh
      </h1>
    );

  if (currentStage === 1) {
    return (
      <div className='bg-blue-500'>
        <p className='font-medium sm:text-xl text-center'>
          Worked with many companies <br /> and picked up many skills along the way
        </p>

        <Link href='/about'>
          Learn more
        </Link>
      </div>
    );
  }

  if (currentStage === 2) {
    return (
      <div className='bg-blue-500'>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link href='/projects'>
          Visit my portfolio
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='bg-blue-500'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I&apos;m just a few keystrokes away
      </p>

      <Link href='/contact'>
        Let&apos;s talk
      </Link>
    </div>
    );
  }
};

export default HomeInfo;