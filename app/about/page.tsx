import {
  AmazonPartner,
  FacebookPartner,
  GooglePartner,
  MedalStar,
  NetflixPartner,
  YoutubePartner,
} from "@/assets/icons";
import CustomLink from "@/components/common/custom-link/custom-link";
import CtaSection from "@/components/feature/home-sections/cta-section/cta-section";
import Button from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <div className="relative h-[240px] lg:h-[500px]">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-black opacity-50"></div>
        <Image
          src="/images/about/cover.jpg"
          width={1000}
          height={850}
          alt="about cover image"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container mx-auto flex flex-col gap-5 border-b border-[#F3F3F3] px-5 py-5 lg:flex-row lg:justify-between lg:border-none lg:pb-[80px] lg:pt-[100px]">
        <div className="grid grid-cols-3 gap-4 lg:gap-10">
          <div className="flex flex-col gap-[6px]">
            <p className="text-base font-bold lg:text-[28px] lg:leading-[36px]">
              800+
            </p>
            <p className="text-nowrap text-xs font-normal lg:text-lg">
              Succesfull Project
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-base font-bold lg:text-[28px] lg:leading-[36px]">
              600+
            </p>
            <p className="text-xs lg:text-lg">Satisfied Client</p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-base font-bold lg:text-[28px] lg:leading-[36px]">
              150+
            </p>
            <p className="text-xs lg:text-lg">Awwards Winners</p>
          </div>
        </div>
        <p className="text-sm text-[#534F69] lg:flex-shrink-0 lg:basis-[488px] lg:text-lg lg:tracking-tight">
          We’re a diverse group of software engineering with different skills
          who make things people love to use. We help the world’s most
          progressive brands solve problems and generate growth.
        </p>
      </div>

      <div className="container mx-auto flex flex-col gap-[15px] px-5 py-5 lg:gap-4 lg:pb-[178px] lg:pt-[100px]">
        <div className="flex flex-col items-center justify-center gap-[15px] text-center lg:gap-4 lg:pb-[100px]">
          <span className="mx-auto rounded-full bg-[#F4F2FF] px-4 py-[6px] text-sm font-semibold uppercase text-[#5A48C3] lg:bg-[#F4F2FF] lg:py-3 lg:text-base lg:text-[#111111]">
            Our team
          </span>
          <h2 className="flex flex-col items-center text-[28px] font-bold uppercase leading-[36px] lg:flex-row lg:gap-1 lg:text-4xl">
            <span>MEET OUR </span> <span>CREATIVE TEAM</span>
          </h2>
          <p className="text-sm text-[#534F69] lg:text-lg">
            Magna metus, adipiscing dictumst magna fringilla metus fermentum
            tristique. Enim vitae purus lectus augue maecenas
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:text-center">
            <Image
              src="/images/about/team/1.png"
              width={335}
              height={260}
              alt="Muhammad Abubakar A."
              className="mb-4 rounded-xl lg:mx-auto lg:mb-6 lg:size-20 lg:rounded-full"
            />
            <h3 className="mb-2 font-bold lg:mb-0 lg:text-xl lg:font-semibold">
              Muhammad Abubakar A.
            </h3>
            <p className="text-sm lg:mb-4 lg:text-lg">Director</p>
            <p className="hidden lg:mb-6 lg:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <SocialMediaLinks />
          </div>
          <div className="lg:text-center">
            <Image
              src="/images/about/team/2.png"
              width={335}
              height={260}
              alt="Alexander Isak"
              className="mb-4 rounded-xl lg:mx-auto lg:mb-6 lg:size-20 lg:rounded-full"
            />
            <h3 className="mb-2 font-bold lg:mb-0 lg:text-xl lg:font-semibold">
              Alexander Isak
            </h3>
            <p className="text-sm lg:mb-4 lg:text-lg">CEO</p>
            <p className="hidden lg:mb-6 lg:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <SocialMediaLinks />
          </div>
          <div className="lg:text-center">
            <Image
              src="/images/about/team/3.png"
              width={335}
              height={260}
              alt="Christina W."
              className="mb-4 rounded-xl lg:mx-auto lg:mb-6 lg:size-20 lg:rounded-full"
            />
            <h3 className="mb-2 font-bold lg:mb-0 lg:text-xl lg:font-semibold">
              Christina W.
            </h3>
            <p className="text-sm lg:mb-4 lg:text-lg">Manager</p>
            <p className="hidden lg:mb-6 lg:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <SocialMediaLinks />
          </div>
          <div className="lg:text-center">
            <Image
              src="/images/about/team/4.png"
              width={335}
              height={260}
              alt="Brian OConner"
              className="mb-4 rounded-xl lg:mx-auto lg:mb-6 lg:size-20 lg:rounded-full"
            />
            <h3 className="mb-2 font-bold lg:mb-0 lg:text-xl lg:font-semibold">
              Brian OConner
            </h3>
            <p className="text-sm lg:mb-4 lg:text-lg">Supervisor</p>
            <p className="hidden lg:mb-6 lg:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <SocialMediaLinks />
          </div>
          <div className="lg:text-center">
            <Image
              src="/images/about/team/5.png"
              width={335}
              height={260}
              alt="Natalie A."
              className="mb-4 rounded-xl lg:mx-auto lg:mb-6 lg:size-20 lg:rounded-full"
            />
            <h3 className="mb-2 font-bold lg:mb-0 lg:text-xl lg:font-semibold">
              Natalie A.
            </h3>
            <p className="text-sm lg:mb-4 lg:text-lg">Creative Director</p>
            <p className="hidden lg:mb-6 lg:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <SocialMediaLinks />
          </div>
          <div className="lg:text-center">
            <Image
              src="/images/about/team/6.png"
              width={335}
              height={260}
              alt="Hengky Doe"
              className="mb-4 rounded-xl lg:mx-auto lg:mb-6 lg:size-20 lg:rounded-full"
            />
            <h3 className="mb-2 font-bold lg:mb-0 lg:text-xl lg:font-semibold">
              Hengky Doe
            </h3>
            <p className="text-sm lg:mb-4 lg:text-lg">Developer</p>
            <p className="hidden lg:mb-6 lg:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <SocialMediaLinks />
          </div>

          <div className="hidden lg:block lg:text-center">
            <Image
              src="/images/about/team/7.png"
              width={335}
              height={260}
              alt="Anna Withanna"
              className="mb-4 rounded-xl lg:mx-auto lg:mb-6 lg:size-20 lg:rounded-full"
            />
            <h3 className="mb-2 font-bold lg:mb-0 lg:text-xl lg:font-semibold">
              Anna Withanna
            </h3>
            <p className="text-sm lg:mb-4 lg:text-lg">Marketing</p>
            <p className="hidden lg:mb-6 lg:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <SocialMediaLinks />
          </div>
          <div className="hidden lg:block lg:text-center">
            <Image
              src="/images/about/team/8.png"
              width={335}
              height={260}
              alt="Setya Wijayanti"
              className="mb-4 rounded-xl lg:mx-auto lg:mb-6 lg:size-20 lg:rounded-full"
            />
            <h3 className="mb-2 font-bold lg:mb-0 lg:text-xl lg:font-semibold">
              Setya Wijayanti
            </h3>
            <p className="text-sm lg:mb-4 lg:text-lg">Content Creator</p>
            <p className="hidden lg:mb-6 lg:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <SocialMediaLinks />
          </div>
        </div>
      </div>

      <div className="bg-[#16112F] px-5 py-10 lg:py-[80px]">
        <div className="container mx-auto">
          <span className="mb-4 inline-block rounded-full bg-[#FFFFFF1A] px-4 py-[6px] text-sm font-semibold uppercase text-[#F4F2FF] lg:mb-[60px] lg:py-[12px] lg:text-base">
            Achievement
          </span>
          <div className="lg:mb-[60px] lg:flex lg:justify-between lg:gap-[80px]">
            <h2 className="mb-4 text-[28px] font-bold leading-[36px] tracking-tight text-[#F4F2FF] lg:flex-shrink-0 lg:basis-[560px] lg:text-4xl">
              OUR AWARD THIS YEAR
            </h2>
            <p className="text-sm text-[#C7C1EA] lg:basis-[560px] lg:text-lg">
              We’re happy to receive this award so that it motivates us to grow
              and provide the best service for you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            <div className="px-5 py-6 lg:px-6 lg:py-8">
              <MedalStar className="mb-6" />
              <h3 className="mb-3 text-xl font-bold text-white lg:text-[28px] lg:leading-[36px]">
                Best Small Companies
              </h3>
              <p className="text-sm text-[#C7C1EA]">
                Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend
                risus pretium consectetur eros.
              </p>
            </div>
            <div className="px-5 py-6 lg:px-6 lg:py-8">
              <MedalStar className="mb-6" />
              <h3 className="mb-3 text-xl font-bold text-white lg:text-[28px] lg:leading-[36px]">
                Fast Company Growth
              </h3>
              <p className="text-sm text-[#C7C1EA]">
                Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend
                risus pretium consectetur eros.
              </p>
            </div>
            <div className="px-5 py-6 lg:px-6 lg:py-8">
              <MedalStar className="mb-6" />
              <h3 className="mb-3 text-xl font-bold text-white lg:text-[28px] lg:leading-[36px]">
                Best Development Team
              </h3>
              <p className="text-sm text-[#C7C1EA]">
                Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend
                risus pretium consectetur eros.
              </p>
            </div>
          </div>
          <div className="border-b border-[#FFFFFF1A] py-4 lg:py-[30px] lg:pb-[60px]">
            <Button
              variant="primary"
              className="w-full gap-[10px] rounded-full border border-[#F4F2FF] bg-transparent py-[14px] text-sm text-[#F4F2FF] lg:mx-auto lg:h-14 lg:w-auto lg:text-lg"
            >
              Start A Project
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                className="h-4 w-4 lg:h-7 lg:w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.16699 11.3337L11.8337 4.66699"
                  stroke="#F4F2FF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.16699 4.66699H11.8337V11.3337"
                  stroke="#F4F2FF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>

          <div>
            <p className="px-5 py-4 text-center text-xs text-[#C7C1EA] lg:mb-6 lg:pt-[60px] lg:text-lg">
              We’ve built with the most growth company around the world
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 lg:gap-[50px]">
              <FacebookPartner className="h-[130px] max-w-[200px]" />
              <NetflixPartner className="h-[130px] max-w-[200px]" />
              <AmazonPartner className="h-[130px] max-w-[200px]" />
              <YoutubePartner className="h-[130px] max-w-[200px]" />
              <GooglePartner className="h-[130px] max-w-[200px]" />
            </div>
          </div>
        </div>
      </div>

      <CtaSection />
    </div>
  );
}

function SocialMediaLinks() {
  return (
    <div className="hidden items-center justify-center gap-[14px] lg:flex">
      <CustomLink title="Linkedin" href="#" className="h-6 w-6">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z"
            fill="black"
          />
        </svg>
      </CustomLink>
      <CustomLink title="X" href="#" className="h-6 w-6">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z"
            fill="black"
          />
        </svg>
      </CustomLink>
      <CustomLink title="Dribbble" href="#" className="h-6 w-6">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3C7.03145 3 3 7.03145 3 12C3 16.9686 7.03145 21 12 21C16.9588 21 21 16.9686 21 12C21 7.03145 16.9588 3 12 3ZM17.9447 7.14859C19.0184 8.45662 19.6627 10.1258 19.6822 11.9317C19.4284 11.8829 16.8904 11.3655 14.333 11.6876C14.2744 11.5607 14.2256 11.4241 14.167 11.2874C14.0108 10.9165 13.8352 10.5358 13.6594 10.1746C16.4902 9.0228 17.7787 7.36334 17.9447 7.14859ZM12 4.32755C13.9523 4.32755 15.7386 5.05966 17.0955 6.26031C16.9588 6.45553 15.7972 8.00759 13.064 9.03253C11.8048 6.71909 10.4089 4.82538 10.1942 4.53254C10.77 4.39588 11.3753 4.32755 12 4.32755ZM8.72996 5.04989C8.93494 5.32321 10.3015 7.22668 11.5803 9.49131C7.98807 10.448 4.81562 10.4284 4.47397 10.4284C4.9718 8.04664 6.58243 6.06507 8.72996 5.04989ZM4.30803 12.0098C4.30803 11.9317 4.30803 11.8536 4.30803 11.7755C4.63991 11.7852 8.36876 11.8341 12.205 10.6822C12.4295 11.1117 12.6345 11.551 12.8297 11.9902C12.7321 12.0195 12.6247 12.0488 12.5271 12.0781C8.56399 13.3568 6.45553 16.8514 6.27983 17.1442C5.05965 15.7874 4.30803 13.9816 4.30803 12.0098ZM12 19.692C10.2234 19.692 8.58352 19.0868 7.28525 18.0716C7.42191 17.7885 8.98371 14.782 13.3178 13.269C13.3373 13.2592 13.3471 13.2592 13.3666 13.2495C14.4501 16.051 14.8894 18.4034 15.0065 19.077C14.0792 19.4772 13.064 19.692 12 19.692ZM16.2852 18.3742C16.2072 17.9056 15.7972 15.6605 14.7917 12.898C17.2028 12.5173 19.3113 13.1421 19.5749 13.23C19.243 15.3677 18.013 17.2126 16.2852 18.3742Z"
            fill="black"
          />
        </svg>
      </CustomLink>
    </div>
  );
}
