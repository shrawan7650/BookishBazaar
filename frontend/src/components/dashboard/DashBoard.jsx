const DashBoard = () => {
  return (
    <div className="flex flex-wrap  h-screen ">
      <div className="w-1/3 p-2 mt-72">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Warren Buffett</h2>
          <p>
            Born in Nebraska in 1930, Warren Buffett demonstrated keen business
            abilities at a young age. He formed Buffett Partnership.
          </p>
        </div>
      </div>
      <div className="w-1/3 p-2">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">An Autobiography</h2>
          <p>Experimen TRUTH</p>
        </div>
      </div>
      <div className="w-1/3 p-2">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Charlotte's Web</h2>
          <p>
            Charlotte's Web is a children's novel by American author E. B. White
            and illustrated by Garth Williams; it was published on THE
          </p>
        </div>
      </div>
      {/* Add more cards as needed */}
    </div>
  );
};

export default DashBoard;
