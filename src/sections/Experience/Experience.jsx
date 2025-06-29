export default function Experience() {
  return (
    <section id="#experiences" className="w-full p-18 shadow-md">
      <div className="flex justify-between gap-2">
        <ol class="relative border-s border-gray-200 dark:border-gray-700">
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
              o
            </span>
            <p class="text-gray-500 text-sm">April 2025 - June 2025</p>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">
              City Government of Baguio - Smart City Command and Control
            </h3>
            <p class="mb-4 text-base font-normal text-gray-600">
              Developed a real-time traffic monitoring system with Laravel and Vue.js, using third-party APIs and Laravel Reverb for live updates and a seamless UI. Created technical documentation to support scalability and team collaboration.
            </p>
          </li>

        </ol>
      </div>
    </section>
  );
}
