export const avalilablePlans = [
  {id: 0, name: 'arcade', price: 9},
  {id: 1, name: 'advanced', price: 12},
  {id: 2, name: 'pro', price: 15},
]

export default function Plans({activePlan, yearly, onChangePlan, onChangeBilling}: any) {
  return (
    <div className="bg-white rounded-xl px-6 py-8 flex flex-col gap-5 shadow-md absolute right-4 left-4 -top-[76px]">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-marine-blue">Select your plan</h2>
        <p className="text-cool-gray">You have the option of monthly or yearly billing.</p>
      </div>
      <div className="flex flex-col gap-4">
        {avalilablePlans.map(plan =>
          <div onClick={() => onChangePlan(plan.name)}
            key={plan.id} className={`${activePlan === plan.name ? 'bg-magnolia outline-purplish-blue' : ''} flex items-start outline outline-1 outline-light-gray rounded-md px-4 py-4 gap-4 cursor-pointer`}>
            <div>
              <img src={`src/assets/images/icon-${plan.name}.svg`} alt="" className="mt-[2px]"/>
            </div>
            <div>
              <h3 className="text-marine-blue font-medium capitalize">{plan.name}</h3>
              <p className="text-cool-gray text-sm">${yearly ? plan.price * 10 : plan.price}/{yearly ? 'yr' : 'mo'}</p>
              {yearly && <p className="text-xs text-marine-blue mt-1">2 months free</p>}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-4 bg-magnolia rounded-md py-2">
        <p className={`${!yearly ? 'text-marine-blue' : 'text-cool-gray'} font-medium`}>Monthly</p>
        <label className="switch">
          <input checked={yearly} onChange={onChangeBilling} type="checkbox"/>
          <span className="slider round"></span>
        </label>
        <p className={`${yearly ? 'text-marine-blue' : 'text-cool-gray'} font-medium`}>Yearly</p>
      </div>
    </div>
  )
}