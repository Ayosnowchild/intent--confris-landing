import {
  ClockIco,
  DownIco,
  DownloadColoredIco,
  DownloadIco,
  LocationIco,
  MailIco,
  PhoneIco,
} from "./Icons/icons";

export default function Home() {
  return (
    <div className="w-full font-space-grotesk">
      <nav className=" px-[8.33%] py-4 flex bg-[#1D1B1F] text-white justify-between items-center ">
        <img
          src="../../images/confris-logo.png"
          alt="confris-logo"
          className=" w-20 h-8"
        />
        <div className=" flex gap-8">
          <p className=" font-medium font-sans">About</p>
          <p className=" font-medium font-sans">Pricing</p>
          <p className=" font-medium font-sans">Speakers</p>
          <p className=" font-medium font-sans">Schedule</p>
          <p className=" font-medium font-sans">Become a partner</p>
          <p className=" font-medium font-sans">Call for papers</p>
          <p className=" font-medium font-sans">Contact</p>
        </div>
        <div className=" flex gap-4">
          <button
            type="button"
            className=" border border-solid border-white rounded px-[18px] py-[10px] flex items-center justify-center text-sm font-medium w-[114px] h-11"
          >
            Login
          </button>
          <button
            type="button"
            className=" bg-[#753BBD] border border-solid border-[#753BBD] rounded px-[18px] py-[10px] flex items-center justify-center text-sm font-medium w-[132px] h-11"
          >
            Register
          </button>
        </div>
      </nav>
      <div className=" bg-banner-gradient bg-cover bg-center bg-no-repeat pl-[8%] w-full h-[600px] flex justify-between">
        <div className=" w-[45%] flex flex-col gap-8 justify-center">
          <div className=" flex flex-col gap-6">
            <p className=" mt-[77px] text-5xl font-sans font-bold leading-[52px]">
              International Sustainable Ecological Engineering Design for
              Society (SEEDS) Conference 2024
            </p>
            <p className=" text-xl text-[#5D5A62] leading-7">
              SEEDS Conference aims to bring together experts from around the
              world to focus on changes required to minimise the impact of human
              activity on the environment.
            </p>
            <p className=" text-xl leading-7 font-medium">
              September 28 - 26 2024 | LEEDS University
            </p>
          </div>
          <div className=" flex gap-4">
            <button
              type="button"
              className=" bg-[#753BBD] border border-solid border-[#753BBD] rounded px-[18px] py-[10px] flex items-center justify-center text-sm font-medium w-[157px] h-12 text-white"
            >
              Submit a paper
            </button>
            <button
              type="button"
              className=" bg-[#F0E4FF] border border-solid border-[#F0E4FF] rounded px-[18px] py-[10px] flex items-center justify-center text-sm font-medium w-[164px] h-12 text-[#753BBD]"
            >
              Register to attend
            </button>
          </div>
        </div>
        <img
          src="../../images/eclipse-banner.png"
          alt="eclipse banner"
          className=" h-full"
        />
      </div>
      <div className=" bg-seed-gradient bg-cover bg-center bg-no-repeat px-[8%] w-full h-[634px]">
        <div className=" bg-gradient-to-r from-[#B63BBD] to-[#812786] w-full h-full rounded-tr-lg rounded-tl-lg px-12 py-16 flex">
          <div className=" bg-white w-1/2 h-full rounded flex flex-col gap-6 justify-center px-10 py-[71px] ">
            <div className=" flex flex-col gap-3">
              <p className=" text-3xl font-bold">About SEED Conference</p>
              <p className=" text-[#5D5A62]">
                The International SEEDS Conference aims to bring together
                experts from around the world to focus on changes required to
                minimise the impact of human activity on the environment. SEEDS
                is organised and co-hosted by Leeds Beckett University, the
                University of the West of England, Bristol, University of
                Suffolk and Loughborough University, with the goal of offering
                an integrated platform for academics and practitioners to reveal
                their personal and collective contributions towards the
                seventeen priorities of the SDGs. Click SEEDS 2024 tab for
                information about this year’s SEEDS conference to be held at the
                Leeds Beckett University, Leeds.
              </p>
            </div>
            <button
              type="button"
              className=" flex gap-2 items-center justify-center bg-[#753BBD] border border-solid border-[#753BBD] rounded px-3 py-[10px] text-white text-sm font-medium w-[191px] h-12"
            >
              <p>Download full info</p>
              <DownloadIco />
            </button>
          </div>
          <img
            src="../../images/about-pic.png"
            alt="about us"
            className=" w-1/2 h-[458px] self-center"
          />
        </div>
      </div>
      <div className=" bg-conference-gradient bg-cover bg-center bg-no-repeat px-[8%] w-full h-[654px]">
        <div className=" bg-gradient-to-r from-[#B63BBD] to-[#812786] w-full h-full rounded-br-lg rounded-bl-lg px-12 py-16 flex flex-col gap-8">
          <div className=" flex flex-col gap-4 justify-center items-center text-white text-center">
            <p className=" text-5xl font-bold">Conference Ticket Pricing</p>
            <p className=" text-lg text-center px-[260px]">
              Explore the various ticket options available for our upcoming
              conference. Whether you prefer attending online or in person, we
              have tailored rates to suit your needs.
            </p>
          </div>
          <div className=" flex gap-6 justify-between items-center">
            <div className=" w-1/5 h-[282px] flex flex-col bg-white gap-2 rounded">
              <p className=" bg-[#4C247D] w-full h-[88px] text-white font-medium text-xl text-center flex items-start py-4 justify-center rounded">
                Full Access (Online + In-person)
              </p>
              <div className=" flex px-4 py-1">
                <p className=" text-xs w-fit">
                  <strong>Online:</strong> 27/08/2024
                </p>
                <p className=" self-en text-end text-xs">
                  <strong>In-person:</strong> 28/08/2024 & 29/08/2024
                </p>
              </div>
              <div className=" flex justify-center items-center gap-2 py-2 border-y border-solid border-black">
                <p className=" line-through font-medium text-xl text-[#807D86]">
                  £350
                </p>
                <p className=" font-medium text-3xl text-[#B63BBD]">£250</p>
              </div>
              <p className=" self-center text-center text-xs font-[#1D1B1F] bg-white px-1 py-2">
                Ticket is 20% off for early birds and 22% off for students.
                Offer for early birds expires 20/08/2024
              </p>
            </div>
            <div className=" w-1/5 h-[282px] flex flex-col bg-white rounded gap-2">
              <p className=" bg-[#4F1553] w-full h-[88px] text-white font-medium text-xl text-center flex items-start rounded py-4 justify-center">
                Single Day (In-person)
              </p>
              <div className=" flex bg-white flex-col ">
                <p className=" px-4 py-1 text-xs">
                  <strong>In-person:</strong> 28/08/2024 or 29/08/2024
                </p>
              </div>
              <div className=" flex justify-center items-center gap-2 py-2 border-y border-solid border-black">
                <p className=" line-through font-medium text-xl text-[#807D86]">
                  £150
                </p>
                <p className=" font-medium text-3xl text-[#B63BBD]">£110</p>
              </div>
              <p className=" self-center text-center text-xs font-[#1D1B1F] bg-white px-1 py-2">
                Ticket is 20% off for early buyers and 22% off for students.
                Offer for early buyers expires 20/08/2024
              </p>
            </div>
            <div className=" w-1/5 h-[282px] flex flex-col bg-white rounded gap-2">
              <p className=" bg-[#222779] w-full h-[88px] text-white font-medium text-xl text-center flex justify-center items-start py-4 rounded">
                Online Only
              </p>
              <div className=" flex bg-white flex-col ">
                <p className=" px-4 py-1 text-xs">
                  <strong>Online:</strong> 27/08/2024
                </p>
              </div>
              <div className=" flex justify-center  items-center border-y py-2 border-solid border-black">
                <p className=" font-medium text-3xl text-[#B63BBD]">£350</p>
              </div>
              <p className=" self-center text-center text-xs font-[#1D1B1F] px-4 py-2">
                You will get to enjoy our online sessions as you get live feeds
              </p>
            </div>
            <div className=" w-1/5 h-[282px] flex flex-col bg-white rounded gap-2">
              <p className=" bg-[#005767] w-full h-[88px] text-white font-medium text-xl text-center flex items-start py-4 justify-center rounded">
                Gala Dinner and RISE Awards
              </p>
              <div className=" flex  flex-col ">
                <p className="px-4 py-1 text-xs">
                  <strong>In-person:</strong> 28/08/2024 & 29/08/2024
                </p>
              </div>
              <div className=" flex justify-center  items-center border-y py-2 border-solid border-black">
                <p className=" font-medium text-3xl text-[#B63BBD]">£350</p>
              </div>
              <p className=" self-center text-center text-xs font-[#1D1B1F] px-4 py-2 ">
                Ticket is 20% off for early birds and 22% off for students.
                Offer for early birds expires 20/08/2024
              </p>
            </div>
          </div>
          <button
            type="button"
            className=" bg-[#4C247D] border border-solid border-[#753BBD] rounded px-[18px] py-[10px] flex items-center justify-center self-center text-sm font-medium w-[157px] h-12 text-white"
          >
            Get ticket now
          </button>
        </div>
      </div>
      <div className=" bg-speaker-gradient w-full h-[719px]  bg-cover bg-center bg-no-repeat px-[8%] py-16 flex flex-col gap-12">
        <div className=" flex flex-col gap-4 justify-center items-center text-black text-center">
          <p className=" text-5xl font-bold">Speakers</p>
          <p className=" text-base text-center px-[260px]">
            The International SEEDS Conference aims to bring together experts
            from around the world to focus on changes required to minimise the
            impact of human activity on the environment
          </p>
        </div>
        <div className=" w-full px-4 flex justify-between items-center">
          <div className=" w-1/5 h-[339px] bg-white">
            <div className=" bg-[url('/images/speaker-one.png')] w-full h-[223px] bg-cover bg-center bg-no-repeat flex justify-end items-end rounded mb-3">
              <p className=" bg-[#753BBD] border border-solid border-[#753BBD] rounded px-3 py-2 flex items-center justify-center text-sm font-medium text-white">
                Keynote Speakers
              </p>
            </div>
            <div className=" flex flex-col gap-2 bg-white px-3">
              <p className=" text-2xl font-medium">Prof. David Damilola</p>
              <div className=" flex flex-col gap-1">
                <p className=" text-sm text-[#1D1B1F]">CEO & Lecturer</p>
                <p className=" text-sm text-[#1D1B1F]">LEEDS University</p>
              </div>
            </div>
          </div>
          <div className=" w-1/5 h-[339px] bg-white">
            <div className=" bg-[url('/images/speaker-two.png')] w-full h-[223px] bg-cover bg-center bg-no-repeat flex justify-end items-end rounded mb-3">
              <p className=" bg-[#753BBD] border border-solid border-[#753BBD] rounded px-3 py-2 flex items-center justify-center text-sm font-medium text-white">
                Invited Speakers
              </p>
            </div>
            <div className=" flex flex-col gap-2 bg-white px-3">
              <p className=" text-2xl font-medium">Prof. David Damilola</p>
              <div className=" flex flex-col gap-1">
                <p className=" text-sm text-[#1D1B1F]">CEO & Lecturer</p>
                <p className=" text-sm text-[#1D1B1F]">LEEDS University</p>
              </div>
            </div>
          </div>
          <div className=" w-1/5 h-[339px] bg-white">
            <div className=" bg-[url('/images/speaker-three.png')] w-full h-[223px] bg-cover bg-center bg-no-repeat flex justify-end items-end rounded mb-3">
              <p className=" bg-[#753BBD] border border-solid border-[#753BBD] rounded px-3 py-2 flex items-center justify-center text-sm font-medium text-white">
                Invited Speakers
              </p>
            </div>
            <div className=" flex flex-col gap-2 bg-white px-3">
              <p className=" text-2xl font-medium">Prof. David Damilola</p>
              <div className=" flex flex-col gap-1">
                <p className=" text-sm text-[#1D1B1F]">CEO & Lecturer</p>
                <p className=" text-sm text-[#1D1B1F]">LEEDS University</p>
              </div>
            </div>
          </div>
          <div className=" w-1/5 h-[339px] bg-white">
            <div className=" bg-[url('/images/speaker-four.png')] w-full h-[223px] bg-cover bg-center bg-no-repeat flex justify-end items-end rounded mb-3">
              <p className=" bg-[#753BBD] border border-solid border-[#753BBD] rounded px-3 py-2 flex items-center justify-center text-sm font-medium text-white">
                Invited Speakers
              </p>
            </div>
            <div className=" flex flex-col gap-2 bg-white px-3">
              <p className=" text-2xl font-medium">Prof. David Damilola</p>
              <div className=" flex flex-col gap-1">
                <p className=" text-sm text-[#1D1B1F]">CEO & Lecturer</p>
                <p className=" text-sm text-[#1D1B1F]">LEEDS University</p>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className=" bg-[#F0E4FF] border border-solid border-[#753BBD] self-center rounded px-[18px] py-[10px] flex items-center gap-2 text-sm font-medium w-fit h-12 text-[#753BBD]"
        >
          <p>See more</p> <DownIco />
        </button>
      </div>
      <div className=" w-full h-[786px] bg-schedule-gradient bg-cover bg-center bg-no-repeat px-[8%] py-16">
        <div className=" flex flex-col gap-4 justify-center items-center text-black text-center mb-8">
          <p className=" text-5xl font-bold">Schedule</p>
          <p className=" text-base text-center px-[260px]">
            Detailed schedule updates are being continually added. Items on the
            schedule are subject to change. All dates and time are displayed in
            the event time zone
          </p>
        </div>
        <div className=" flex flex-col gap-8 ">
          <div className=" flex w-full border-b border-solid border-[#753BBD]">
            <p className=" w-fit px-8 py-4 bg-[#753BBD] border border-solid border-[#753BBD] rounded-tr rounded-tl text-white text-xl font-bold">
              Wed, Aug 22
            </p>
            <p className=" w-fit px-8 py-4 text-black text-xl font-bold">
              Thu, Aug 23
            </p>
            <p className=" w-fit px-8 py-4 text-black text-xl font-bold">
              Fri, Aug 24
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <div className=" w-[285px] h-[322px] px-4 py-6 bg-white">
              <div className=" flex flex-col gap-1 mb-2">
                <p className=" w-fit px-2 py-[2px] bg-[#F8DCFA] rounded-sm">
                  Onsite
                </p>
                <p className=" text-2xl font-bold">Registration opens</p>
              </div>
              <p className=" text-[#1D1B1F] mb-4">
                Registration opens and checkin would begin
              </p>
              <div className=" flex flex-col gap-2">
                <div className=" flex gap-2">
                  <ClockIco />
                  <p className=" text-sm font-medium">
                    Aug 22, 2024. 8:00 AM - 10:00 AM
                  </p>
                </div>
                <div className=" flex gap-2">
                  <LocationIco />
                  <p className=" text-sm font-medium">Main Hall</p>
                </div>
              </div>
            </div>
            <div className=" w-[285px] h-[322px] px-4 py-6 bg-white">
              <div className=" flex flex-col gap-1 mb-2">
                <div className=" flex gap-1 items-center">
                  <p className=" w-fit px-2 py-[2px] bg-[#F8DCFA] rounded-sm">
                    Onsite
                  </p>
                  <p className=" w-fit px-2 py-[2px] bg-[#F3EFFB] rounded-sm">
                    Online
                  </p>
                </div>
                <p className=" text-2xl font-bold">First session</p>
              </div>
              <p className=" text-[#1D1B1F] mb-4">
                Marketing strategies live and die by results and metrics. So why
                is it so hard to show impact for your ABM program? This workshop
                will help you overcome that challenge by
              </p>
              <div className=" flex flex-col gap-2">
                <div className=" flex gap-2">
                  <ClockIco />
                  <p className=" text-sm font-medium">
                    Aug 22, 2024. 8:00 AM - 10:00 AM
                  </p>
                </div>
                <div className=" flex gap-2">
                  <LocationIco />
                  <p className=" text-sm font-medium">Main Hall</p>
                </div>
              </div>
            </div>
            <div className=" w-[285px] h-[322px] px-4 py-6 bg-white">
              <div className=" flex flex-col gap-1 mb-2">
                <p className=" w-fit px-2 py-[2px] bg-[#F8DCFA] rounded-sm">
                  Onsite
                </p>
                <p className=" text-2xl font-bold">First session</p>
              </div>
              <p className=" text-[#1D1B1F] mb-4">
                Marketing strategies live and die by results and metrics. So why
                is it so hard to show impact for your ABM program? This workshop
                will help you overcome that challenge by
              </p>
              <div className=" flex flex-col gap-2">
                <div className=" flex gap-2">
                  <ClockIco />
                  <p className=" text-sm font-medium">
                    Aug 22, 2024. 8:00 AM - 10:00 AM
                  </p>
                </div>
                <div className=" flex gap-2">
                  <LocationIco />
                  <p className=" text-sm font-medium">Main Hall</p>
                </div>
              </div>
            </div>
            <div className=" w-[285px] h-[322px] px-4 py-6 bg-white">
              <div className=" flex flex-col gap-1 mb-2">
                <p className=" w-fit px-2 py-[2px] bg-[#F8DCFA] rounded-sm">
                  Onsite
                </p>
                <p className=" text-2xl font-bold">First session</p>
              </div>
              <p className=" text-[#1D1B1F] mb-4">
                Marketing strategies live and die by results and metrics. So why
                is it so hard to show impact for your ABM program? This workshop
                will help you overcome that challenge by
              </p>
              <div className=" flex flex-col gap-2">
                <div className=" flex gap-2">
                  <ClockIco />
                  <p className=" text-sm font-medium">
                    Aug 22, 2024. 8:00 AM - 10:00 AM
                  </p>
                </div>
                <div className=" flex gap-2">
                  <LocationIco />
                  <p className=" text-sm font-medium">Main Hall</p>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className=" bg-[#F0E4FF] border border-solid border-[#753BBD] self-center rounded px-[18px] py-[10px] flex items-center gap-2 text-sm font-medium w-fit h-12 mt-12 text-[#753BBD]"
          >
            <p>See more</p> <DownIco />
          </button>
        </div>
      </div>
      <div className=" w-full h-[754px] flex flex-col bg-[#4F1553] gap-12">
        <div className=" w-full h-[216px] py-8  bg-[url('../../public/images/partner-bg.png')] bg-cover bg-center bg-no-repeat">
          <p className=" text-3xl font-bold text-white text-center mb-8">
            Our Partners & Collaborators
          </p>
          <div className=" flex gap-8 w-full items-center justify-between">
            <img src="../../images/wiley.png" alt="wiley" />
            <img src="../../images/lough.png" alt="lough" />
            <img src="../../images/uwe.png" alt="uwe" />
            <img src="../../images/bf-clob.png" alt="leeds" />
            <img src="../../images/clob.png" alt="clob" />
            <img src="../../images/emerald.png" alt="emerald" />
            <img src="../../images/ice.png" alt="ice" />
            <img src="../../images/IB.png" alt="ib" />
          </div>
        </div>
        <div className=" w-full flex px-[120px] justify-between">
          <div className=" w-[436px] flex flex-col gap-3">
            <p className=" text-5xl font-bold text-white">Become a Partner</p>
            <p className=" text-white">
              Want to partner with us for the conference? Kindly fill the form
              to allow us evaluate and manage potential partnership and
              sponsorship
            </p>
          </div>
          <div className=" flex flex-col gap-4">
            <div className=" flex gap-5">
              <div className=" flex flex-col gap-2">
                <label className=" text-xs font-medium text-white">
                  Organization name
                </label>
                <input
                  type="text"
                  placeholder="Enter organization name"
                  className=" w-[323px] h-12 border border-[#CCCACE] border-solid bg-white rounded py-[14px] px-3"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className=" text-xs font-medium text-white">Logo</label>
                <div className="flex items-center border border-[#CCCACE] bg-white overflow-hidden w-[323px] h-12 rounded">
                  <input
                    type="text"
                    placeholder="Upload logo"
                    className="flex-1 p-2 border-none focus:outline-none text-black"
                  />

                  <label
                    htmlFor="file-upload"
                    className="px-4 py-2 cursor-pointer text-xs h-full flex items-center justify-center text-[#753BBD] bg-[#F0E4FF] font-medium"
                  >
                    Browse file
                  </label>

                  <input id="file-upload" type="file" className="hidden" />
                </div>
              </div>
            </div>
            <div className=" flex gap-5">
              <div className=" flex flex-col gap-2">
                <label className=" text-xs font-medium text-white">Email</label>
                <input
                  type="text"
                  placeholder="Jim@seedconference@gmail.com"
                  className=" w-[323px] h-12 border border-[#CCCACE] border-solid bg-white rounded py-[14px] px-3"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className=" text-xs font-medium text-white">
                  Moble number
                </label>
                <input
                  type="text"
                  placeholder="Jim@seedconference@gmail.com"
                  className=" w-[323px] h-12 border border-[#CCCACE] border-solid bg-white rounded py-[14px] px-3"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="description"
                className=" text-xs font-medium text-white"
              >
                Brief Description of Organization
              </label>
              <textarea
                id="description"
                placeholder="Type here"
                className="px-3 py-[14px] border border-[#CCCACE] border-solid bg-white rounded w-[676px] h-[181px]"
              ></textarea>
            </div>
            <button
              type="button"
              className=" bg-[#753BBD] border border-solid border-[#753BBD] rounded px-[18px] py-[10px] flex items-center justify-center text-sm font-medium w-fit h-10 text-white flex-end self-end"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full h-[751px] bg-paper-gradient bg-cover bg-center bg-no-repeat px-[8%] flex flex-col  py-16">
        <div className=" flex flex-col gap-4 justify-center items-center text-black text-center mb-8">
          <p className=" text-5xl font-bold">Call for Paper</p>
          <p className=" text-base text-center px-[260px]">
            We invite scholars, educators, and researchers to submit their
            papers for the upcoming [Conference Name]. This year's theme is
            "Innovative Approaches in Education" and we welcome contributions
            that explore new methodologies, case studies, and theoretical
            advancements.
          </p>
        </div>
        <div className=" w-full flex justify-between">
          <div className=" w-[387px] h-[355px] bg-white">
            <p className=" bg-[#4F1553] w-full h-16 flex justify-center items-center text-white text-2xl font-medium">
              Important Dates
            </p>
            <ul className=" p-4 list-disc list-inside text-[#5D5A62]">
              <li>Abstract submission starts: August 15 - October 17, 2024</li>
              <li>Manuscripts submission: October 16 - October 28, 2024</li>
              <li>
                Notification of Acceptance: November 30 - December 2, 2024
              </li>
              <li>Final Paper Submission: December 20, 2024</li>
            </ul>
          </div>
          <div className=" w-[387px] h-[355px] bg-white flex flex-col">
            <p className=" bg-[#4F1553] w-full h-16 flex justify-center items-center text-white text-2xl font-medium">
              Submission Guidelines
            </p>
            <ul className=" px-4 pt-4 list-disc list-inside text-[#5D5A62]">
              <li>
                Format: Please submit your paper in PDF format using our
                provided template.
              </li>
              <li>
                Length: Submissions should be 6-8 pages, including references
                and appendices.
              </li>
              <li>File Types: Accepted file types include .pdf and .docx.</li>
              <li> Download template below</li>
            </ul>
            <button
              type="button"
              className=" bg-white border border-solid border-[#753BBD] self-center rounded px-[18px] py-[10px] flex items-center gap-2 text-sm font-medium w-fit h-12 mt-6 text-[#753BBD]"
            >
              <p>Download Template</p> <DownloadColoredIco />
            </button>
          </div>
          <div className=" w-[387px] h-[355px] bg-white">
            <p className=" bg-[#4F1553] w-full h-16 flex justify-center items-center text-white text-2xl font-medium">
              Submission Process
            </p>
            <ul className=" p-4 list-disc list-inside text-[#5D5A62]">
              <li>Prepare your paper according to the guidelines.</li>
              <li>Register on our submission portal.</li>
              <li>Submit your paper and provide the necessary details.</li>
              <li>
                We review and give you necessary pointers to making it better
              </li>
              <li>Submit final paper </li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          className=" bg-[#753BBD] border border-solid self-center border-[#753BBD] rounded px-[18px] mt-12 py-[10px] flex items-center justify-center text-sm font-medium w-[157px] h-12 text-white"
        >
          Submit paper
        </button>
      </div>
      <div className=" w-full h-[475px] bg-contact-gradient bg-cover bg-center bg-no-repeat px-[8%] flex  py-16">
        <div className=" w-full flex justify-between">
          <div className=" w-[436px] flex flex-col gap-3">
            <p className=" text-5xl font-bold text-black">Contact us</p>
            <p className=" text-black">
              Want to partner with us for the conference? Kindly fill the form
              to allow us evaluate and manage potential partnership and
              sponsorship
            </p>
            <div className=" flex flex-col gap-2">
              <div className=" flex gap-2 items-center">
                <MailIco />
                <p className=" text-sm font-medium text-[#B63BBD]">
                  admin@conference.com
                </p>
              </div>
              <div className=" flex gap-2 items-center">
                <PhoneIco />
                <p className=" text-sm font-medium text-[#B63BBD]">
                  +4466779977
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <div className=" flex gap-5">
              <div className=" flex flex-col gap-2">
                <label className=" text-xs font-medium text-black">
                  Firstname
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className=" w-[323px] h-12 border border-[#F1F0F1] border-solid bg-white rounded py-[14px] px-3"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className=" text-xs font-medium text-black">
                  Lastname
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className=" w-[323px] h-12 border border-[#F1F0F1] border-solid bg-white rounded py-[14px] px-3"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="description"
                className=" text-xs font-medium text-black"
              >
                Message
              </label>
              <textarea
                id="description"
                placeholder="Type here"
                className="px-3 py-[14px] border border-[#CCCACE] border-solid bg-white rounded w-[676px] h-[181px]"
              ></textarea>
            </div>
            <button
              type="button"
              className=" bg-[#753BBD] border border-solid border-[#753BBD] rounded px-[18px] py-[10px] flex items-center justify-center text-sm font-medium w-fit h-10 text-white flex-end self-end"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <footer className=" bg-[#1D1B1F] w-full h-[72px] px-[8%] py-6">
        <div className=" w-full flex items-center justify-between">
          <p className=" text-[#F1F0F1]">
            © 2024 SEED Conference. All rights reserved.
          </p>
          <p className=" text-[#F1F0F1]">Powered by: Confris</p>
        </div>
      </footer>
    </div>
  );
}
