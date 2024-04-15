import { useState, useEffect } from 'react';
import docsImg from '~/assets/images/docs.png'
import metaImg from '~/assets/images/meta.png'
import connectImg from '~/assets/images/connect.png'
import superImg from '~/assets/images/super.png'
import linkedImg from '~/assets/images/linked.png'

const SingleViewSection = () => {
  const headers = ['All your charts in a single view', 'Get data from the tools you love', 'Tell your story with AI captions', 'Design you will be proud to share', 
  'Embed anywhere', 'Invite your whole team'];

  const images = [docsImg, metaImg, connectImg, superImg, linkedImg,docsImg];

  const [activeHeader, setActiveHeader] = useState(headers[0]);

  useEffect(() => {
    const handleScroll = () => {
      const headerElements = document.querySelectorAll('.scroll-spy-header');
      let prevHeader = headers[0]; 

      headerElements.forEach((headerElement) => {
        const rect = headerElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          prevHeader = headerElement.textContent;
        }
      });

      setActiveHeader(prevHeader);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headers]);

  return (
    <section className="flex items-start px-32 justify-between bg-white text-black lg:px-10  lg:hidden">
      
              <div className="flex flex-col gap-40 pt-60">
        {headers.map((header) => (
          <div
            key={header}
            className={`scroll-spy-header text-[40px] font-semibold lg:text-xl lg:leading-normal   ${
              header === activeHeader ? 'opacity-100' : ' opacity-20'
            }`}
          >
            {header}
          </div>
        ))}
      </div>
      <div>
      <div className="h-[1500px] w-full">
        <img src={images[headers.indexOf(activeHeader)]} alt="Sticky" className='flex flex-col gap-5  sticky sticky   self-center top-32 '  />
      </div>
      </div>
    </section>
  );
};

export default SingleViewSection;
