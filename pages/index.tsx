import type { NextPage } from 'next'
import React from 'react'
import PasswordChecklist from "react-password-checklist"

const Home: NextPage = () => {
  const [password, setPassword] = React.useState('');
  return (
    <div>
      <input onChange={(e) => {setPassword(e.target.value)}} />

      <PasswordChecklist
				rules={["minLength","specialChar","number","capital"]}
				minLength={5}
				value={password}
				onChange={(isValid) => {
          console.log(isValid);
        }}
			/>
    </div>
  )
}

export default Home
