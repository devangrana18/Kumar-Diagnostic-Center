import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-700 text-white text-center py-4 mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} Kumar Diagnostic Center. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer
