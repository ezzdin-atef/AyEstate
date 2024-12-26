import { SearchIcon } from "@/assets/icons";
import CustomLink from "@/components/common/custom-link/custom-link";
import Button from "@/components/ui/button";
import faqData from "@/data/faq.json";
import { cn } from "@/lib/utils";
import React from "react";

export default function Faqs() {
  return (
    <div className="container mx-auto px-6 pt-[30px] lg:pt-[120px]">
      <h1 className="mb-4 text-center text-2xl font-bold text-[#1B2124] lg:mb-[50px] lg:text-[44px] lg:leading-[58px] lg:text-[#252A3F]">
        Helping you is our priority
      </h1>
      <div className="relative mx-auto mb-[12px] lg:mb-6 lg:max-w-[820px]">
        <SearchIcon className="absolute left-[14px] top-1/2 size-[18px] -translate-y-1/2 lg:left-[22px] lg:size-6" />
        <input
          type="text"
          name="search"
          id="search"
          className="shadow-[0_4px_120px_0_rgba(151, 159, 183, 0.2)] flex h-[52px] w-full items-center justify-center rounded-2xl bg-white pl-[46px] placeholder:text-xs placeholder:text-[#7F879E] lg:h-[68px] lg:pl-[58px] lg:placeholder:text-base"
          placeholder="Search question"
          style={{
            boxShadow: "0px 4px 120px rgba(151, 159, 183, 0.2)",
          }}
        />
        <Button
          variant="primary"
          className="absolute right-[6px] top-1/2 hidden h-[56px] -translate-y-1/2 px-[53px] text-base lg:flex"
        >
          Search
        </Button>
      </div>
      <p className="px-4 text-center text-xs text-[#7F879E] lg:text-base lg:font-semibold">
        *We are collect your searching keywords to improve our FAQ
      </p>

      <div className="grid grid-cols-1 gap-5 py-[50px] lg:grid-cols-3 lg:py-[100px]">
        <div className="rounded-2xl border-[1.5px] border-[#F9F9F9] px-[14px] py-4 text-center lg:p-6">
          <svg
            width={46}
            height={46}
            viewBox="0 0 46 46"
            fill="none"
            className="mx-auto mb-4 lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={23} cy={23} r={23} fill="#F9F9F9" />
            <path
              d="M22.9998 23C25.5311 23 27.5832 20.948 27.5832 18.4167C27.5832 15.8854 25.5311 13.8334 22.9998 13.8334C20.4685 13.8334 18.4165 15.8854 18.4165 18.4167C18.4165 20.948 20.4685 23 22.9998 23Z"
              stroke="#3860E2"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30.8743 32.1667C30.8743 28.6192 27.3451 25.75 23.0001 25.75C18.6551 25.75 15.126 28.6192 15.126 32.1667"
              stroke="#3860E2"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width={76}
            height={76}
            viewBox="0 0 76 76"
            fill="none"
            className="mx-auto mb-[30px] hidden lg:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={38} cy={38} r={38} fill="#F9F9F9" />
            <path
              d="M38.0002 38C40.9917 38 43.4168 35.5749 43.4168 32.5834C43.4168 29.5918 40.9917 27.1667 38.0002 27.1667C35.0086 27.1667 32.5835 29.5918 32.5835 32.5834C32.5835 35.5749 35.0086 38 38.0002 38Z"
              stroke="#111111"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M47.306 48.8333C47.306 44.6408 43.1352 41.25 38.0002 41.25C32.8652 41.25 28.6943 44.6408 28.6943 48.8333"
              stroke="#111111"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="mb-2 text-base font-bold text-[#1B2124] lg:mb-4 lg:text-2xl">
            My Account
          </h3>
          <p className="text-sm text-[#7F879E] lg:text-lg">
            From how to setup your account to how to apply for a job
          </p>
        </div>
        <div className="rounded-2xl border-[1.5px] border-[#F9F9F9] px-[14px] py-4 text-center">
          <svg
            width={46}
            height={46}
            viewBox="0 0 46 46"
            fill="none"
            className="mx-auto mb-4 lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={23} cy={23} r={23} fill="#F9F9F9" />
            <path
              d="M32.6668 21.1667V25.75C32.6668 30.3334 30.8335 32.1667 26.2502 32.1667H20.7502C16.1668 32.1667 14.3335 30.3334 14.3335 25.75V20.25C14.3335 15.6667 16.1668 13.8334 20.7502 13.8334H25.3335"
              stroke="#3860E2"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32.6668 21.1667H29.0002C26.2502 21.1667 25.3335 20.25 25.3335 17.5V13.8334L32.6668 21.1667Z"
              stroke="#3860E2"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.9165 23.9166H24.4165"
              stroke="#3860E2"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.9165 27.5834H22.5832"
              stroke="#3860E2"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width={76}
            height={76}
            viewBox="0 0 76 76"
            fill="none"
            className="mx-auto mb-[30px] hidden lg:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={38} cy={38} r={38} fill="#F9F9F9" />
            <path
              d="M43.4165 47.2084H32.5832C29.3332 47.2084 27.1665 45.5834 27.1665 41.7917V34.2084C27.1665 30.4167 29.3332 28.7917 32.5832 28.7917H43.4165C46.6665 28.7917 48.8332 30.4167 48.8332 34.2084V41.7917C48.8332 45.5834 46.6665 47.2084 43.4165 47.2084Z"
              stroke="#111111"
              strokeWidth={2}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M43.4168 34.75L40.026 37.4583C38.9102 38.3467 37.0793 38.3467 35.9635 37.4583L32.5835 34.75"
              stroke="#111111"
              strokeWidth={2}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="mb-2 text-base font-bold text-[#1B2124] lg:mb-4 lg:text-2xl">
            Email Campaigns
          </h3>
          <p className="text-sm text-[#7F879E] lg:text-lg">
            Engage your contacts using th ebest mobile- friendly email design
            tools
          </p>
        </div>
        <div className="rounded-2xl border-[1.5px] border-[#F9F9F9] px-[14px] py-4 text-center">
          <svg
            width={46}
            height={46}
            viewBox="0 0 46 46"
            fill="none"
            className="mx-auto mb-4 lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={23} cy={23} r={23} fill="#F9F9F9" />
            <path
              d="M23.986 30.7183H18.1927C15.296 30.7183 14.3335 28.7933 14.3335 26.8591V19.1408C14.3335 16.2441 15.296 15.2816 18.1927 15.2816H23.986C26.8827 15.2816 27.8452 16.2441 27.8452 19.1408V26.8591C27.8452 29.7558 26.8735 30.7183 23.986 30.7183Z"
              stroke="#3860E2"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30.3935 27.675L27.8452 25.8875V20.1033L30.3935 18.3158C31.6402 17.445 32.6669 17.9767 32.6669 19.5075V26.4925C32.6669 28.0233 31.6402 28.555 30.3935 27.675Z"
              stroke="#3860E2"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.0415 22.0834C23.8009 22.0834 24.4165 21.4678 24.4165 20.7084C24.4165 19.949 23.8009 19.3334 23.0415 19.3334C22.2821 19.3334 21.6665 19.949 21.6665 20.7084C21.6665 21.4678 22.2821 22.0834 23.0415 22.0834Z"
              stroke="#3860E2"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width={76}
            height={76}
            viewBox="0 0 76 76"
            fill="none"
            className="mx-auto mb-[30px] hidden lg:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={38} cy={38} r={38} fill="#F9F9F9" />
            <path
              d="M35.8876 27.7408L29.366 31.9983C27.2751 33.3633 27.2751 36.4183 29.366 37.7833L35.8876 42.0408C37.0576 42.81 38.986 42.81 40.156 42.0408L46.6451 37.7833C48.7251 36.4183 48.7251 33.3741 46.6451 32.0091L40.156 27.7516C38.986 26.9716 37.0576 26.9716 35.8876 27.7408Z"
              stroke="#111111"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M31.0992 39.17L31.0884 44.2508C31.0884 45.6266 32.15 47.1 33.45 47.5333L36.9059 48.6816C37.5017 48.8766 38.4875 48.8766 39.0942 48.6816L42.55 47.5333C43.85 47.1 44.9117 45.6266 44.9117 44.2508V39.2241"
              stroke="#111111"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M48.1831 41.25V34.75"
              stroke="#111111"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="mb-2 text-base font-bold text-[#1B2124] lg:mb-4 lg:text-2xl">
            Luxury Properties
          </h3>
          <p className="text-sm text-[#7F879E] lg:text-lg">
            Find all our resource with Luxury Properties Management Real Estate
          </p>
        </div>
      </div>

      <div className="py-[50px] lg:py-[100px]">
        <h2 className="mb-4 text-center text-2xl font-bold text-[#1B2124] lg:mb-[30px] lg:text-[44px] lg:leading-[58px]">
          Our Website
        </h2>
        <p className="mb-[30px] text-center text-sm text-[#7F879E] lg:mb-[50px] lg:text-lg">
          Frequently asked question about my account
        </p>
        <div className="mb-6 flex flex-col gap-5 lg:mb-[50px] lg:gap-[62px]">
          {faqData.map((el) => (
            <details
              key={el.id}
              className={cn(
                "details rounded-[18px] border-2 border-[#F9F9F9] p-5",
              )}
              // onClick={() => setFaqOpen(el.id)}
            >
              <summary className="cursor-pointer appearance-none pr-8 text-sm font-bold text-[#1B2124] lg:text-2xl">
                {el.title}
              </summary>
              <div className="mt-4 lg:mt-6">
                <p className="text-sm leading-6 text-[#7F879E] lg:text-lg lg:font-semibold">
                  {el.content}
                </p>
                <CustomLink
                  title="Read More"
                  href="#"
                  className="mt-5 block font-bold text-primary-1 lg:mt-6 lg:text-lg"
                >
                  Read More
                </CustomLink>
              </div>
            </details>
          ))}
        </div>
        <Button
          variant="primary"
          className="h-[48px] w-full text-xs font-bold lg:mx-auto lg:h-14 lg:w-auto lg:text-base"
        >
          Give a Quote
        </Button>
      </div>
      <div className="py-[50px] lg:py-[100px]">
        <h2 className="mb-4 text-center text-2xl font-bold text-[#1B2124] lg:mb-[30px] lg:text-[44px] lg:leading-[58px]">
          Still Have a question?
        </h2>
        <p className="mb-[30px] text-center text-sm text-[#7F879E] lg:mx-auto lg:max-w-[727px] lg:text-lg">
          If you cannot find answer to your question in our FAQ, you can always
          contact us. We wil answer to you shortly!
        </p>

        <div className="grid grid-cols-1 gap-5 py-[50px] lg:grid-cols-3">
          <div className="rounded-2xl border-[1.5px] border-[#F9F9F9] px-[14px] py-4 lg:p-6">
            <svg
              width={46}
              height={46}
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-4 lg:hidden"
            >
              <circle cx={23} cy={23} r={23} fill="#F9F9F9" />
              <path
                d="M22.9998 23C25.5311 23 27.5832 20.948 27.5832 18.4167C27.5832 15.8854 25.5311 13.8333 22.9998 13.8333C20.4685 13.8333 18.4165 15.8854 18.4165 18.4167C18.4165 20.948 20.4685 23 22.9998 23Z"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30.8743 32.1667C30.8743 28.6192 27.3451 25.75 23.0001 25.75C18.6551 25.75 15.126 28.6192 15.126 32.1667"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width={76}
              height={76}
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-[30px] hidden lg:block"
            >
              <circle cx={38} cy={38} r={38} fill="#F9F9F9" />
              <path
                d="M38.0002 38.0001C40.9917 38.0001 43.4168 35.575 43.4168 32.5834C43.4168 29.5919 40.9917 27.1667 38.0002 27.1667C35.0086 27.1667 32.5835 29.5919 32.5835 32.5834C32.5835 35.575 35.0086 38.0001 38.0002 38.0001Z"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M47.306 48.8333C47.306 44.6408 43.1352 41.25 38.0002 41.25C32.8652 41.25 28.6943 44.6408 28.6943 48.8333"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mb-2 text-center text-base font-bold text-[#1B2124] lg:mb-4 lg:text-2xl lg:text-[#252A3F]">
              +(1) 2345 6789
            </h3>
            <p className="text-center text-sm text-[#7F879E] lg:text-lg">
              Our 24/7 Customer Services
            </p>
          </div>
          <div className="rounded-2xl border-[1.5px] border-[#F9F9F9] px-[14px] py-4 lg:p-6">
            <svg
              width={46}
              height={46}
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-4 lg:hidden"
            >
              <circle cx={23} cy={23} r={23} fill="#F9F9F9" />
              <path
                d="M32.6668 21.1667V25.75C32.6668 30.3333 30.8335 32.1667 26.2502 32.1667H20.7502C16.1668 32.1667 14.3335 30.3333 14.3335 25.75V20.25C14.3335 15.6667 16.1668 13.8333 20.7502 13.8333H25.3335"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32.6668 21.1667H29.0002C26.2502 21.1667 25.3335 20.25 25.3335 17.5V13.8333L32.6668 21.1667Z"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.9165 23.9167H24.4165"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.9165 27.5833H22.5832"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width={76}
              height={76}
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-[30px] hidden lg:block"
            >
              <circle cx={38} cy={38} r={38} fill="#F9F9F9" />
              <path
                d="M43.4165 47.2084H32.5832C29.3332 47.2084 27.1665 45.5834 27.1665 41.7917V34.2084C27.1665 30.4167 29.3332 28.7917 32.5832 28.7917H43.4165C46.6665 28.7917 48.8332 30.4167 48.8332 34.2084V41.7917C48.8332 45.5834 46.6665 47.2084 43.4165 47.2084Z"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M43.4168 34.75L40.026 37.4583C38.9102 38.3467 37.0793 38.3467 35.9635 37.4583L32.5835 34.75"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mb-2 text-center text-base font-bold text-[#1B2124] lg:mb-4 lg:text-2xl lg:text-[#252A3F]">
              support@ayestate.com
            </h3>
            <p className="text-center text-sm text-[#7F879E] lg:text-lg">
              Alternative way to get anwser faster.
            </p>
          </div>
          <div className="rounded-2xl border-[1.5px] border-[#F9F9F9] px-[14px] py-4 lg:p-6">
            <svg
              width={46}
              height={46}
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-4 lg:hidden"
            >
              <circle cx={23} cy={23} r={23} fill="#F9F9F9" />
              <path
                d="M23.5002 32.1667C28.5628 32.1667 32.6668 28.0626 32.6668 23C32.6668 17.9374 28.5628 13.8333 23.5002 13.8333C18.4376 13.8333 14.3335 17.9374 14.3335 23C14.3335 28.0626 18.4376 32.1667 23.5002 32.1667Z"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.8331 14.75H20.7498C18.9623 20.1033 18.9623 25.8967 20.7498 31.25H19.8331"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.25 14.75C28.0375 20.1033 28.0375 25.8967 26.25 31.25"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.25 26.6667V25.75C20.6033 27.5375 26.3967 27.5375 31.75 25.75V26.6667"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.25 20.25C20.6033 18.4625 26.3967 18.4625 31.75 20.25"
                stroke="#B7E08A"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width={76}
              height={76}
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-[30px] hidden lg:block"
            >
              <circle cx={38} cy={38} r={38} fill="#F9F9F9" />
              <path
                d="M38.0002 49.6666C44.4435 49.6666 49.6668 44.4432 49.6668 37.9999C49.6668 31.5566 44.4435 26.3333 38.0002 26.3333C31.5568 26.3333 26.3335 31.5566 26.3335 37.9999C26.3335 44.4432 31.5568 49.6666 38.0002 49.6666Z"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33.3335 27.5H34.5002C32.2252 34.3133 32.2252 41.6867 34.5002 48.5H33.3335"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M41.5 27.5C43.775 34.3133 43.775 41.6867 41.5 48.5"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.5 42.6667V41.5C34.3133 43.775 41.6867 43.775 48.5 41.5V42.6667"
                stroke="#B7E08A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.5 34.5C34.3133 32.225 41.6867 32.225 48.5 34.5"
                stroke="#B7E08A"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mb-2 text-center text-base font-bold text-[#1B2124] lg:mb-4 lg:text-2xl lg:text-[#252A3F]">
              Real Estate Management
            </h3>
            <p className="text-center text-sm text-[#7F879E] lg:text-lg">
              Our community ready to help you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
