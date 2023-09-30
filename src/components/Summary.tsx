import { allAddons } from "./Addons"
import { avalilablePlans } from "./Plans"

export default function Summary({activePlan, yearly, onChangeMind, addons}: any) {
  const planPrice = avalilablePlans.filter(plan => plan.name === activePlan)[0].price
  const addonsPrice = allAddons.filter((_, i) => addons[i]).reduce((accum, addon) => accum + addon.price, 0)

  return (
    <div className="bg-white rounded-xl px-6 py-8 flex flex-col gap-5 shadow-md absolute right-4 left-4 -top-[76px]">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-marine-blue">Finishing up</h2>
        <p className="text-cool-gray">Double-check everything looks OK before confirming.</p>
      </div>
      <div className="flex flex-col gap-3 bg-[#ecf3fc] rounded-md px-4 py-4">
        <div className={`flex items-center justify-between ${addons.find((addon: any) => addon === true) ? 'border-b  border-light-gray pb-4' : ''}`}>
          <div>
            <h3 className="text-marine-blue font-medium text-sm capitalize">{activePlan} {!yearly ? '(Monthly)' : '(Yearly)'}</h3>
            <p onClick={onChangeMind} className="text-cool-gray text-xs underline cursor-pointer">Change</p>
          </div>
          <p className="text-sm text-marine-blue font-semibold">${yearly ? planPrice * 10 : planPrice}/{yearly ? 'yr' : 'mo'}</p>
        </div>
        {addons.find((addon: any) => addon === true) &&
        <div className="flex flex-col gap-2">
          {allAddons.map(addon => 
            addons[addon.id] && (
              <div key={addon.id} className="flex justify-between items-center">
                <p className="text-cool-gray text-sm">{allAddons[addon.id].name}</p>
                <p className="text-sm text-marine-blue">+${yearly ? allAddons[addon.id].price * 10 : allAddons[addon.id].price}/{yearly ? 'yr' : 'mo'}</p>
              </div>
            )
          )}
        </div>
        }
      </div>
      <div className="flex justify-between items-center p-2">
        <p className="text-cool-gray">Total (per {yearly ? 'year' : 'month'})</p>
        <span className="text-purplish-blue font-semibold">+${yearly ? (planPrice + addonsPrice) * 10 : (planPrice + addonsPrice)}/{yearly ? 'yr' : 'mo'}</span>
      </div>
    </div>
  )
}