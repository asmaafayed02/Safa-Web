import React from 'react'
import AskSection from '../AskSection/AskSection'
import Lectures from '../Lecturers/Lectures'
import SeminarSection from '../SeminarSection/SeminarSection'

const HomePage = () => {
  return (
    <main>
        <Lectures/>
        <SeminarSection/>
        <AskSection/>
    </main>
  )
}

export default HomePage