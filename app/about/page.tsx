// pages/about.js
export default function About() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen flex items-center justify-center py-12 px-2 sm:px-2 lg:px-4">
      <div className="max-w-8xl bg-white p-8 rounded-3xl shadow-2xl hover:shadow-2xl transition-shadow duration-300">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Me</h1>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          My name is <span className="font-semibold text-blue-600">Sagar</span>, and I am an intern at Payosofttech Nepal. I am currently enhancing my skills in <span className="font-semibold text-blue-600">Next.js</span>, with a focus on building scalable web applications.
        </p>

        <div className="mt-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Skills & Interests</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Web Development</li>
            <li>Next.js</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>API Development</li>
          </ul>
        </div>

        <div className="mt-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">My Journey</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I started my journey with an interest in coding. Over time, I developed a strong foundation in web development. I am currently focusing on mastering Next.js and full-stack development to make an impact in the tech industry.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Contact & Social Media</h2>
          <p className="text-lg text-gray-700">
            You can reach me via email at <a href="mailto:sagar@example.com" className="text-blue-600 hover:text-blue-800 transition duration-200">sagar@example.com</a> or connect with me on LinkedIn at <a href="https://www.linkedin.com/in/sagarbishta/" className="text-blue-600 hover:text-blue-800 transition duration-200">sagarbista.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
