export const allAddons = [
  {id: 0, name: 'Online service', description: 'Access to multiplayer games', price: 1},
  {id: 1, name: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2},
  {id: 2, name: 'Customizable Profile', description: 'Custom theme on your profile', price: 2}
]

export default function Addons({addons, yearly, onToggleAddon}: any) {
  return (
    <div className="bg-white rounded-xl px-6 py-8 flex flex-col gap-5 shadow-md absolute right-4 left-4 -top-[76px]">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-marine-blue">Pick add-ons</h2>
        <p className="text-cool-gray">Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="flex flex-col gap-4">
        {allAddons.map(addon =>
          <div key={addon.id} className={`${addons[addon.id] ? 'bg-magnolia outline-purplish-blue' : ''} flex items-center justify-between outline outline-1 outline-light-gray rounded-md px-4 py-3`}>
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 relative">
                <input checked={addons[addon.id]} onChange={() => onToggleAddon(addon.id)} type="checkbox" className="w-5 h-5 rounded-md cursor-pointer appearance-none checked:bg-purplish-blue checked:outline-none outline outline-1 outline-light-gray"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute top-0 left-0 w-5 h-5 stroke-white fill-white pointer-events-none"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
              </div>
  
              <div>
                <h3 className="text-marine-blue font-medium text-base">{addon.name}</h3>
                <p className="text-cool-gray text-xs">{addon.description}</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-purplish-blue">+${yearly ? addon.price * 10 : addon.price}/{yearly ? 'yr' : 'mo'}</p>
            </div>         
          </div>
        )}
      </div>
    </div>
  )
}