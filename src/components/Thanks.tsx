export default function Thanks() {
  return (
    <div className="bg-white rounded-xl px-6 py-16 flex flex-col gap-5 shadow-md items-center absolute right-4 left-4 -top-[76px] xl:top-4 xl:shadow-none">
      <div>
        <img className="w-16 aspect-square" src="images/icon-thank-you.svg" alt="" />
      </div>
      <h1 className="text-2xl font-semibold text-marine-blue">Thank you</h1>
      <p className="text-center text-cool-gray">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}