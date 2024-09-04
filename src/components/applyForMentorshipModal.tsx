

interface MyComponentProps {
  handleToggleModal: () => void; // Specify the correct type here
};


export default function ApplyForMentorshipModal({handleToggleModal}:MyComponentProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  <div className="w-full max-w-md md:max-w-lg lg:max-w-xl p-4 bg-white rounded-lg shadow-lg overflow-y-auto max-h-screen">
    <header className="flex justify-between items-center mb-3">
      <h3 className="text-lg font-semibold">Mentorship Request</h3>
      <button onClick={handleToggleModal} className="text-lg font-bold">
        X
      </button>
    </header>
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-gray-700" htmlFor="background">
        <strong>My Background</strong>
        <span className="text-xs">(Minimum of 30 characters)</span>
      </label>
      <textarea
        name="background"
        id="background"
        placeholder="Tell the mentor about yourself"
        rows={3}
        className="w-full border p-2 rounded-lg resize-none"
      ></textarea>
      <label className="text-sm text-gray-700" htmlFor="expectations">
        <strong>My Expectations</strong>
        <span className="text-xs">(Minimum of 30 characters)</span>
      </label>
      <textarea
        name="expectations"
        id="expectations"
        placeholder="Tell the mentor what you hope/expect to achieve"
        rows={3}
        className="w-full border p-2 rounded-lg resize-none"
      ></textarea>
      <label className="text-sm text-gray-700" htmlFor="message">
        <strong>Message</strong>
        <span className="text-xs">(Minimum of 30 characters)</span>
      </label>
      <textarea
        name="message"
        id="message"
        placeholder="Tell the mentor about yourself"
        rows={3}
        className="w-full border p-2 rounded-lg resize-none"
      ></textarea>
    </div>

    <div className="mt-4 space-y-2">
      <p className="text-xs text-gray-700">
        👉🏻 Include all relevant details so the mentor understands who you are, where you stand, and what you're looking for. Review it to ensure you haven't missed anything.
      </p>
      <p className="text-xs text-gray-700">
        👉🏻 If you haven't read our Mentorship Guidelines, now is the time ✌
      </p>
    </div>

    <div className="flex justify-end gap-3 mt-4">
      <button className="px-3 py-1 bg-green-500 text-white rounded-sm hover:bg-green-600">
        Send
      </button>
      <button
        onClick={handleToggleModal}
        className="px-3 py-1 bg-blue-500 text-white rounded-sm hover:bg-blue-600"
      >
        Close
      </button>
    </div>
  </div>
</div>

  );
}
