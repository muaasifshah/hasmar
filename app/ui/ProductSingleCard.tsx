import { LinkButton } from "./Form/Button";
import Icon from "./Icon/Icon";

export default function ProductCard() {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-14 lg:px-12 lg:py-24">
        <div className="mb-8 flex gap-2 max-md:flex-col max-md:items-center">
          <div className="h-full w-full grow overflow-hidden">
            <div className="h-[30vh] w-full border border-[#d1d7dc] dark:border-gray-500 xl:h-[60vh]">
              <iframe
                title="Lessons 1: Introduction"
                src="https://www.youtube.com/embed/9xwazD5SyVg?si=HKNwaEJ8ji9eDKT4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full border-0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex shrink-0 flex-col max-md:w-full md:max-w-[600px]">
            <div className="flex items-center gap-6 border border-[#d1d7dc] bg-[#f7f9fa] p-4 text-gray-900 dark:border-gray-500 dark:bg-gray-800 dark:text-white sm:px-6 sm:py-4">
              <span className="flex-1 font-bold">Subjects/Courses</span>
              <span className="hidden text-sm opacity-90 sm:inline">
                9 lectures • <span>2h 35m</span>
              </span>
            </div>
            <div className="h-full max-h-[488px] space-y-2.5 overflow-y-auto overflow-x-hidden border border-t-0 border-[#d1d7dc] p-4 dark:border-gray-500 sm:px-6 sm:py-4">
              <div className="flex items-start">
                <Icon
                  id="video-play"
                  className="mr-2.5 mt-1 h-5 w-5 fill-gray-900 dark:fill-white sm:mr-4"
                ></Icon>
                <span>
                  <button
                    type="button"
                    className="text-gray-900 outline-none transition hover:text-blue-brandHover focus:text-blue-brandHover focus:underline active:text-blue-brandHover active:underline dark:text-white"
                  >
                    Lessons 1: Introduction
                  </button>
                  <span className="block flex-1 text-sm opacity-75">00:32</span>
                </span>
              </div>
              <div className="flex items-start">
                <Icon
                  id="video-play"
                  className="mr-2.5 mt-1 h-5 w-5 fill-gray-900 dark:fill-white sm:mr-4"
                ></Icon>
                <span>
                  <button
                    type="button"
                    className="text-gray-900 outline-none transition hover:text-blue-brandHover focus:text-blue-brandHover focus:underline active:text-blue-brandHover active:underline dark:text-white"
                  >
                    Lessons 2: Basic Tool
                  </button>
                  <span className="block flex-1 text-sm opacity-75">05:40</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 max-md:flex-col max-md:items-center">
          <div className="max-w-full grow">
            <div
              id="overview"
              className="prose prose-slate max-w-full text-gray-900 lg:prose-lg dark:text-white dark:prose-headings:text-white dark:prose-lead:text-white"
            >
              <h3>Course Descriptions</h3>
              <p>
                Consectetur adipisicing elit, sed do eiusmod tempor is
                incididunt ut labore et dolore of magna aliqua. Ut enim ad minim
                veniam, made of owl the quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute
                irure and dolor in reprehenderit.
              </p>
              <p>
                The is ipsum dolor sit amet consectetur adipiscing elit. Fusce
                eleifend porta arcu In hac augu ehabitasse the is platea augue
                thelorem turpoi dictumst. In lacus libero faucibus at malesuada
                sagittis placerat eros sed istincidunt augue ac ante rutrum sed
                the is sodales augue consequat.
              </p>
              <h3>Requirements for The Course</h3>
              <p>
                Nulla facilisi. Vestibulum tristique sem in eros eleifend
                imperdiet. Donec quis convallis neque. In id lacus pulvinar
                lacus, eget vulputate lectus. Ut viverra bibendum lorem, at
                tempus nibh mattis in. Sed a massa eget lacus consequat auctor.
              </p>
            </div>
            <div id="curriculum">
              <div className="mt-8">
                <div className="flex items-center gap-6 border border-[#d1d7dc] bg-[#f7f9fa] p-4 text-gray-900 dark:border-gray-500 dark:bg-gray-800 dark:text-white sm:px-6 sm:py-4">
                  <span className="flex-1 font-bold">Subjects/Courses</span>
                  <span className="hidden text-sm opacity-90 sm:inline">
                    9 lectures • <span>2h 35m</span>
                  </span>
                </div>
                <div className="space-y-2.5 border border-t-0 border-[#d1d7dc] p-4 dark:border-gray-500 sm:px-6 sm:py-4">
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <div className="flex items-center">
                      <Icon
                        id="video-play"
                        className="mr-2.5 h-5 w-5 fill-gray-900 dark:fill-white sm:mr-4"
                      ></Icon>
                      <span className="text-gray-900 dark:text-white">
                        <button
                          type="button"
                          className="text-blue-brand underline outline-none hover:text-blue-brandHover focus:text-blue-brandHover active:text-blue-brandHover"
                        >
                          Lessons 1: Introduction
                        </button>
                      </span>
                    </div>
                    <div className="hidden sm:flex sm:items-center sm:gap-5">
                      <button
                        type="button"
                        className="flex-1 text-sm text-blue-brand underline outline-none hover:text-blue-brandHover focus:text-blue-brandHover active:text-blue-brandHover"
                      >
                        Preview
                      </button>
                      <span className="inline flex-1 text-sm opacity-75">
                        00:32
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <div className="flex items-center">
                      <Icon
                        id="video-play"
                        className="mr-2.5 h-5 w-5 fill-gray-900 dark:fill-white sm:mr-4"
                      ></Icon>
                      <span className="text-gray-900 dark:text-white">
                        Lessons 2: Basic Tool
                      </span>
                    </div>
                    <div className="hidden sm:flex sm:items-center sm:gap-5">
                      <span className="inline flex-1 text-sm opacity-75">
                        05:40
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-[120px] h-full w-full max-w-full shrink-0 space-y-7 md:w-[370px]">
            <div className="border border-[#d1d7dc] p-4 dark:border-gray-500 dark:text-white sm:px-6 sm:py-4">
              <h5 className="mb-5 text-xl font-semibold">
                This course includes:
              </h5>
              <ul className="mb-7">
                <li className="flex flex-wrap items-center justify-between gap-2.5 border-t border-[#d1d7dc] py-[15px] last:border-b dark:border-gray-500">
                  <span className="flex items-center">
                    <Icon
                      id="video-play"
                      className="mr-2 h-5 w-5 fill-blue-brand"
                    ></Icon>
                    <span className="font-semibold">Duration:</span>
                  </span>
                  <span className="text-sm opacity-75">
                    8.5 hours on-demand video
                  </span>
                </li>
                <li className="flex flex-wrap items-center justify-between gap-2.5 border-t border-[#d1d7dc] py-[15px] last:border-b dark:border-gray-500">
                  <span className="flex items-center">
                    <Icon
                      id="infinite"
                      className="mr-2 h-5 w-5 fill-blue-brand"
                    ></Icon>
                    <span className="font-semibold">Access:</span>
                  </span>
                  <span className="text-sm opacity-75">
                    Full lifetime access
                  </span>
                </li>
                <li className="flex flex-wrap items-center justify-between gap-2.5 border-t border-[#d1d7dc] py-[15px] last:border-b dark:border-gray-500">
                  <span className="flex items-center">
                    <Icon
                      id="lesson"
                      className="mr-2 h-5 w-5 fill-blue-brand"
                    ></Icon>
                    <span className="font-semibold">Lessons:</span>
                  </span>
                  <span className="text-sm opacity-75">12</span>
                </li>
                <li className="flex flex-wrap items-center justify-between gap-2.5 border-t border-[#d1d7dc] py-[15px] last:border-b dark:border-gray-500">
                  <span className="flex items-center">
                    <Icon
                      id="trophy"
                      className="mr-2 h-5 w-5 fill-blue-brand"
                    ></Icon>
                    <span className="font-semibold">Certifications:</span>
                  </span>
                  <span className="text-sm opacity-75">Yes</span>
                </li>
                <li className="flex flex-wrap items-center justify-between gap-2.5 border-t border-[#d1d7dc] py-[15px] last:border-b dark:border-gray-500">
                  <span className="flex items-center">
                    <Icon
                      id="globe"
                      className="mr-2 h-5 w-5 fill-blue-brand"
                    ></Icon>
                    <span className="font-semibold">Language:</span>
                  </span>
                  <span className="text-sm opacity-75">English</span>
                </li>
              </ul>
              <div className="space-y-2.5 text-center">
                <LinkButton
                  to={"#"}
                  variant="primary"
                  prefetch="intent"
                  icon={true}
                >
                  Join this Course{" "}
                  <Icon
                    id="arrow-long-right"
                    className={`absolute right-0 m-[0.438rem] h-[2.5rem] w-[2.5rem] rounded-full bg-white bg-opacity-35 fill-white p-[0.6rem] max-xs:m-[.4rem] max-xs:h-[2.35rem] max-xs:w-[2.35rem]`}
                  />
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
