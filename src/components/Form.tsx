import { useState } from 'react'

import Info from "./Info"
import Plans from "./Plans"
import Addons from "./Addons"
import Summary from "./Summary"
import Thanks from './Thanks'
import { act } from 'react-dom/test-utils'

const steps = [
  {id: 1, text: 'Your info'},
  {id: 2, text: 'Select plan'},
  {id: 3, text: 'Add-ons'},
  {id: 4, text: 'Summary'},
]

export default function Form() {
  const [activePage, setActivePage] = useState(1)
  const [formInfo, setFormInfo] = useState({ 
    name: '',
    email: '',
    phone: '',
    plan: 'arcade',
    yearly: false,
    addons: [false, false, false]
  })

  function resetFormInfo() {
    setFormInfo({name: '', email: '', phone: '', plan: 'arcade', yearly: false, addons: [false, false, false]})
  }

  function handleNextPage() {
    setActivePage(activePage + 1)
    if(activePage === 4) resetFormInfo()
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setFormInfo({...formInfo, name: e.target.value})
  }
  
  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setFormInfo({...formInfo, email: e.target.value})
  }

  function handleChangePhone(e: React.ChangeEvent<HTMLInputElement>) {
    setFormInfo({...formInfo, phone: e.target.value})
  }

  function handleChangePlan(name: string) {
    setFormInfo({...formInfo, plan: name})
  }

  function handleChangeBilling(e: React.ChangeEvent<HTMLInputElement>) {
    setFormInfo({...formInfo, yearly: e.target.checked})
  }

  function handleToggleAddon(id: number) {
    const updatedAddons = formInfo.addons.map((a, i) => {
      if(i === id) return !a
      return a
    })
    setFormInfo({...formInfo, addons: updatedAddons})
  }
 
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-sidebar-mobile bg-no-repeat bg-cover">
        <div className="flex justify-center gap-4 pt-8 pb-28">
          {steps.map(step =>
            <div key={step.id} className="flex" onClick={() => setActivePage(step.id)}>
              <div className={`h-8 w-8 rounded-full grid place-content-center cursor-pointer select-none font-semibold ${activePage === step.id ?'bg-light-blue outline-transparent text-marine-blue' : 'text-white outline outline-white outline-1'}`}>
                <p className="">{step.id}</p>
              </div>
              <div className="hidden">
                <span>Step {step.id}</span>
                <p>{step.text}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-magnolia flex-1 relative">
        {activePage === 1 && (
          <Info 
            name={formInfo.name}
            email={formInfo.email}
            phone={formInfo.phone}
            onChangeName={handleChangeName}
            onChangeEmail={handleChangeEmail}
            onChangePhone={handleChangePhone}/>
        )}
        {activePage === 2 && (
          <Plans
            activePlan={formInfo.plan}
            yearly={formInfo.yearly}
            onChangePlan={handleChangePlan}
            onChangeBilling={handleChangeBilling}/>
        )}
        {activePage === 3 && (
          <Addons
            addons={formInfo.addons}
            yearly={formInfo.yearly}
            onToggleAddon={handleToggleAddon}/>
        )}
        {activePage === 4 && (
          <Summary
            activePlan={formInfo.plan}
            yearly={formInfo.yearly}
            onChangeMind={() => setActivePage(2)}
            addons={formInfo.addons}/>
        )}
        {activePage === 5 && <Thanks/>}
      </div>
      {activePage < 5 &&
        <div className=" flex items-center justify-between px-4 h-20">
          <button className="py-2 px-4 text-cool-gray font-medium rounded-md disabled:opacity-0" onClick={() => setActivePage(activePage - 1)} disabled={activePage === 1}>Go Back</button>
          <button className={`${activePage === 4 ? 'bg-purplish-blue' : ''} py-2 px-4 bg-marine-blue text-white rounded-md disabled:opacity-0`} onClick={() => handleNextPage()}>{activePage < 4 ? 'Next Step' : 'Confirm'}</button>
        </div>
      }
    </div>
  )
}