
 
 const AdminHome = () => {
  return (
    <div className="p-4 bg-gray-100 w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Demo Dashboard</h2>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Connected</span>
          <img className="h-6 w-6 rounded-full" src="https://api.dicebear.com/5.x/identicon/svg?seed=JC" alt="JC" />
          <img className="h-6 w-6 rounded-full" src="https://api.dicebear.com/5.x/identicon/svg?seed=JD" alt="JD" />
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Stats</h3>
          <button className="btn-blue">Start tracking</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-gray-600">
            <p className="text-xl font-semibold">5</p>
            <p>Tasks finished</p>
          </div>
          <div className="text-gray-600">
            <p className="text-xl font-semibold">10</p>
            <p>Tracked hours</p>
          </div>
          <div className="text-gray-600">
            <p className="text-xl font-semibold">5 of 8</p>
            <p>Completed</p>
          </div>
          <div className="text-gray-600">
            <p className="text-xl font-semibold">20</p>
            <p>Your daily plan</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow mt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Your tasks today</h3>
        <ul className="space-y-2">
          <li className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Number 10</p>
              <p className="text-gray-800">Blog and social posts</p>
            </div>
            <span className="text-gray-600">Deadline is today</span>
          </li>
          {/* Add more tasks here */}
        </ul>
      </div>
      <div className="bg-white p-4 rounded shadow mt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Grace Aroma</h3>
        <ul className="space-y-2">
          <li className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">New campaign review</p>
              <p className="text-gray-800">New feedback</p>
            </div>
            <span className="text-gray-600">4h</span>
          </li>
          <li className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Petz App</p>
              <p className="text-gray-800">Cross-platform and browser QA</p>
            </div>
            <span className="text-gray-600">7d</span>
          </li>
          {/* Add more tasks here */}
        </ul>
      </div>
    </div>);
 }
 
 export default AdminHome