import * as elements from "typed-html";
import BaseHtml from "../layouts/baseHtml";

const AppointmentDetail = () => {
  return (
    <BaseHtml>
      {/* <div class="container mx-auto px-4 py-8">
        <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-md"
          data-v0-t="card"
        >
          <div class="flex flex-col space-y-1.5 p-6">
            <h2 class="text-2xl font-bold">Appointment Details</h2>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">Date</h3>
                <p class="text-lg">15th December 2023</p>
              </div>
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">Time</h3>
                <p class="text-lg">10:30 AM</p>
              </div>
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">Location</h3>
                <p class="text-lg">123 Main St, Anytown, USA</p>
              </div>
              <div class="flex items-start justify-between">
                <h3 class="text-lg font-semibold">Description</h3>
                <p class="text-lg">Regular check-up with Dr. Smith</p>
              </div>
            </div>
          </div>
          <div class="p-4">
            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
              Reschedule Appointment
            </button>
          </div>
        </div>
      </div> */}

      <div class="mx-auto max-w-[350px] space-y-6">
        <div class="space-y-4">
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
            data-v0-t="card"
          >
            <div class="flex-col space-y-1.5 p-6 flex justify-between items-center">
              <h2 class="text-xl font-bold">Appointment Details</h2>
              <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 text-sm">
                Upcoming
              </div>
            {/* </div>
            <div class="p-6 space-y-2">
              <div class="flex items-center">
                <img
                  src="/icons/date.svg"
                  alt=""
                  style="width: 2rem; height: 2rem;"
                />
                <p class="text-sm">Date: ${appointment.NGAYKHAM.toDateString()}</p>
              </div>
              <div class="flex items-center">
                <img
                  src="/icons/date.svg"
                  alt=""
                  style="width: 2rem; height: 2rem;"
                />
                <p class="text-sm">Time:${appointment.GIOKHAM.toISOString().split("T")[1].split(".")[0]}
                </p>
              </div> */}
              <div class="flex items-center">
                {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4 mr-2"
          >
            <line x1="2" x2="5" y1="12" y2="12"></line>
            <line x1="19" x2="22" y1="12" y2="12"></line>
            <line x1="12" x2="12" y1="2" y2="5"></line>
            <line x1="12" x2="12" y1="19" y2="22"></line>
            <circle cx="12" cy="12" r="7"></circle>
          </svg> */}
                <p class="text-sm">Location: 123 Main St, City, State</p>
              </div>
              <div class="flex items-center">
                {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4 mr-2"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          </svg> */}
                <p class="text-sm">Purpose: Medical Check-up</p>
              </div>
            </div>
            <div class="mt-4">
              <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                Confirm Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseHtml>
  );
};

export default AppointmentDetail;
