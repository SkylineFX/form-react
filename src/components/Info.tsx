export default function Info({name, email, phone, onChangeName, onChangeEmail, onChangePhone}: any) {
  return (
    <div className="bg-white rounded-xl px-6 py-8 flex flex-col gap-5 shadow-md absolute right-4 left-4 -top-[76px]">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-marine-blue">Personal info</h2>
        <p className="text-cool-gray">Please provide your name, email address, and phone number.</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs text-marine-blue">Name</label>
          <input required value={name} onChange={onChangeName}
            type="text" placeholder="e.g. Stephen King" className="w-full indent-4 py-2 rounded-sm outline outline-1 outline-light-gray"/>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs text-marine-blue">Email Address</label>
          <input required value={email} onChange={onChangeEmail}
            type="text" placeholder="e.g. stephenking@lorem.com" className="w-full indent-4 py-2 rounded-sm outline outline-1 outline-light-gray"/>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs text-marine-blue">Phone Number</label>
          <input required value={phone} onChange={onChangePhone}
            type="text" placeholder="e.g. +1 234 567 890" className="w-full indent-4 py-2 rounded-sm outline outline-1 outline-light-gray"/>
        </div>
      </div>
    </div>
  )
}