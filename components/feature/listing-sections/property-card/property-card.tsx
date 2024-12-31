import { HeartIcon } from "@/assets/icons";
import CustomLink from "@/components/common/custom-link/custom-link";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  id: number;
  title: string;
  type: string;
  location: string;
}

export default function PropertyCard(props: Props) {
  return (
    <div>
      <div className="relative mb-2 max-h-[300px] lg:max-h-[400px]">
        <span className="absolute left-2 top-3 rounded-3xl bg-[#111111BF] px-1 py-0.5 text-[8px] font-semibold text-white lg:left-6 lg:top-4 lg:px-5 lg:py-2 lg:text-sm">
          Featured
        </span>
        <button
          aria-label="Add to favorite"
          className="absolute right-2 top-2 rounded-full bg-[#FFFFFFBF] p-1 lg:right-6 lg:top-4 lg:p-2"
        >
          <HeartIcon className="h-3 w-3 lg:h-5 lg:w-5" />
        </button>
        <Image
          src={props.image}
          width={600}
          height={650}
          alt="Property"
          className="h-[130px] w-full rounded-lg object-cover lg:h-[400px]"
        />
      </div>
      <div className="space-y-2">
        <h4 className="line-clamp-1 text-xs font-semibold lg:text-[22px] lg:leading-8">
          <CustomLink
            title={`Read more about ${props.title}`}
            href={`/properties/${props.id}`}
          >
            {props.title}
          </CustomLink>
        </h4>
        <div className="space-y-1">
          <p className="text-[10px] font-semibold lg:text-lg">{props.type}</p>
          <p className="text-[8px] text-[#333333] lg:text-sm">
            {props.location}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-1.5 gap-y-2 text-[10px] text-[#A9A9A9] lg:gap-[14px] lg:text-sm">
          <li className="flex items-center gap-1 lg:gap-2">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0961 8.10705L10.8461 2.21017C10.843 2.2075 10.8402 2.20463 10.8375 2.20158C10.6074 1.99231 10.3075 1.87634 9.99648 1.87634C9.68545 1.87634 9.38558 1.99231 9.15547 2.20158L9.14688 2.21017L2.90391 8.10705C2.77656 8.22414 2.67491 8.3664 2.60538 8.52482C2.53586 8.68323 2.49997 8.85436 2.5 9.02736V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H7.5C7.83152 17.5 8.14946 17.3683 8.38388 17.1339C8.6183 16.8995 8.75 16.5815 8.75 16.25V12.5H11.25V16.25C11.25 16.5815 11.3817 16.8995 11.6161 17.1339C11.8505 17.3683 12.1685 17.5 12.5 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V9.02736C17.5 8.85436 17.4641 8.68323 17.3946 8.52482C17.3251 8.3664 17.2234 8.22414 17.0961 8.10705ZM16.25 16.25H12.5V12.5C12.5 12.1685 12.3683 11.8506 12.1339 11.6161C11.8995 11.3817 11.5815 11.25 11.25 11.25H8.75C8.41848 11.25 8.10054 11.3817 7.86612 11.6161C7.6317 11.8506 7.5 12.1685 7.5 12.5V16.25H3.75V9.02736L3.75859 9.01955L10 3.12501L16.2422 9.01798L16.2508 9.0258L16.25 16.25Z"
                fill="#A9A9A9"
              />
            </svg>
            <span>Villa</span>
          </li>
          <li className="flex items-center gap-1 lg:gap-2">
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4998 10.6666V11.5C16.4998 13.0916 15.6082 14.475 14.2915 15.175L14.8332 17.3333H13.1665L12.7498 15.6666H5.24984L4.83317 17.3333H3.1665L3.70817 15.175C3.04083 14.821 2.48259 14.2917 2.0935 13.6442C1.7044 12.9967 1.49916 12.2554 1.49984 11.5V10.6666H0.666504V8.99996H15.6665V3.16663C15.6665 2.94561 15.5787 2.73365 15.4224 2.57737C15.2661 2.42109 15.0542 2.33329 14.8332 2.33329C14.4165 2.33329 14.0998 2.61663 13.9998 2.99163C14.5248 3.44163 14.8332 4.10829 14.8332 4.83329H9.83317C9.83317 4.17025 10.0966 3.53437 10.5654 3.06553C11.0342 2.59668 11.6701 2.33329 12.3332 2.33329H12.4748C12.8165 1.36663 13.7415 0.666626 14.8332 0.666626C15.4962 0.666626 16.1321 0.930018 16.6009 1.39886C17.0698 1.8677 17.3332 2.50358 17.3332 3.16663V10.6666H16.4998ZM14.8332 10.6666H3.1665V11.5C3.1665 12.163 3.4299 12.7989 3.89874 13.2677C4.36758 13.7366 5.00346 14 5.6665 14H12.3332C12.9962 14 13.6321 13.7366 14.1009 13.2677C14.5698 12.7989 14.8332 12.163 14.8332 11.5V10.6666Z"
                fill="#A9A9A9"
              />
            </svg>
            <span>2</span>
          </li>
          <li className="flex items-center gap-1 lg:gap-2">
            <svg
              width={18}
              height={12}
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666504 11.8333V6.83329C0.666504 6.45829 0.742893 6.11801 0.895671 5.81246C1.04845 5.5069 1.24984 5.23607 1.49984 4.99996V2.66663C1.49984 1.97218 1.74289 1.3819 2.229 0.895793C2.71512 0.409682 3.30539 0.166626 3.99984 0.166626H7.33317C7.65262 0.166626 7.95123 0.225792 8.229 0.344126C8.50678 0.462459 8.76373 0.625515 8.99984 0.833293C9.23595 0.624959 9.49289 0.461904 9.77067 0.344126C10.0484 0.226348 10.3471 0.167182 10.6665 0.166626H13.9998C14.6943 0.166626 15.2846 0.409682 15.7707 0.895793C16.2568 1.3819 16.4998 1.97218 16.4998 2.66663V4.99996C16.7498 5.23607 16.9512 5.5069 17.104 5.81246C17.2568 6.11801 17.3332 6.45829 17.3332 6.83329V11.8333H15.6665V10.1666H2.33317V11.8333H0.666504ZM9.83317 4.33329H14.8332V2.66663C14.8332 2.43052 14.7532 2.23274 14.5932 2.07329C14.4332 1.91385 14.2354 1.83385 13.9998 1.83329H10.6665C10.4304 1.83329 10.2326 1.91329 10.0732 2.07329C9.91373 2.23329 9.83373 2.43107 9.83317 2.66663V4.33329ZM3.1665 4.33329H8.1665V2.66663C8.1665 2.43052 8.0865 2.23274 7.9265 2.07329C7.7665 1.91385 7.56873 1.83385 7.33317 1.83329H3.99984C3.76373 1.83329 3.56595 1.91329 3.4065 2.07329C3.24706 2.23329 3.16706 2.43107 3.1665 2.66663V4.33329ZM2.33317 8.49996H15.6665V6.83329C15.6665 6.59718 15.5865 6.3994 15.4265 6.23996C15.2665 6.08052 15.0687 6.00051 14.8332 5.99996H3.1665C2.93039 5.99996 2.73261 6.07996 2.57317 6.23996C2.41373 6.39996 2.33373 6.59774 2.33317 6.83329V8.49996Z"
                fill="#A9A9A9"
              />
            </svg>
            <span>4</span>
          </li>
          <li className="flex items-center gap-1 lg:gap-2">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 2.16667V13.8333C0.5 14.7525 1.2475 15.5 2.16667 15.5H13.8333C14.7525 15.5 15.5 14.7525 15.5 13.8333V2.16667C15.5 1.2475 14.7525 0.5 13.8333 0.5H2.16667C1.2475 0.5 0.5 1.2475 0.5 2.16667ZM13.835 13.8333H2.16667V2.16667H13.8333L13.835 13.8333Z"
                fill="#A9A9A9"
              />
            </svg>
            <span>1400m2</span>
          </li>
          <li className="flex items-center gap-1 lg:gap-2">
            <svg
              width={18}
              height={12}
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666504 11.8333V6.83329C0.666504 6.45829 0.742893 6.11801 0.895671 5.81246C1.04845 5.5069 1.24984 5.23607 1.49984 4.99996V2.66663C1.49984 1.97218 1.74289 1.3819 2.229 0.895793C2.71512 0.409682 3.30539 0.166626 3.99984 0.166626H7.33317C7.65262 0.166626 7.95123 0.225792 8.229 0.344126C8.50678 0.462459 8.76373 0.625515 8.99984 0.833293C9.23595 0.624959 9.49289 0.461904 9.77067 0.344126C10.0484 0.226348 10.3471 0.167182 10.6665 0.166626H13.9998C14.6943 0.166626 15.2846 0.409682 15.7707 0.895793C16.2568 1.3819 16.4998 1.97218 16.4998 2.66663V4.99996C16.7498 5.23607 16.9512 5.5069 17.104 5.81246C17.2568 6.11801 17.3332 6.45829 17.3332 6.83329V11.8333H15.6665V10.1666H2.33317V11.8333H0.666504ZM9.83317 4.33329H14.8332V2.66663C14.8332 2.43052 14.7532 2.23274 14.5932 2.07329C14.4332 1.91385 14.2354 1.83385 13.9998 1.83329H10.6665C10.4304 1.83329 10.2326 1.91329 10.0732 2.07329C9.91373 2.23329 9.83373 2.43107 9.83317 2.66663V4.33329ZM3.1665 4.33329H8.1665V2.66663C8.1665 2.43052 8.0865 2.23274 7.9265 2.07329C7.7665 1.91385 7.56873 1.83385 7.33317 1.83329H3.99984C3.76373 1.83329 3.56595 1.91329 3.4065 2.07329C3.24706 2.23329 3.16706 2.43107 3.1665 2.66663V4.33329ZM2.33317 8.49996H15.6665V6.83329C15.6665 6.59718 15.5865 6.3994 15.4265 6.23996C15.2665 6.08052 15.0687 6.00051 14.8332 5.99996H3.1665C2.93039 5.99996 2.73261 6.07996 2.57317 6.23996C2.41373 6.39996 2.33373 6.59774 2.33317 6.83329V8.49996Z"
                fill="#A9A9A9"
              />
            </svg>
            <span>4</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
