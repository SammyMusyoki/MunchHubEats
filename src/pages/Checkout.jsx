import React from 'react'

const Checkout = () => {
  return (
    <React.Fragment>
      <section className="w-full relative isolate h-full">
        <div className="mx-auto max-w-[1560px] px-6 py-6">
          <div className="overflow-y-scroll scrollbar-hide h-screen">
            <div className="text-center border rounded-md p-2 shadow-inner">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                MunchHub{" "}
                <span className="font-dancing text-xl text-yellow-400">
                  Secure Checkout
                </span>
              </h1>
              <div className="">
                <button className="p-1 border px-4 mx-2 rounded font-semibold bg-yellow-400 shadow-lg">
                  <span className="font-bold text-sm">Pay with </span>Stripe
                </button>
                <button className="p-1 border px-4 mx-2 rounded
                 font-semibold bg-green-400 shadow-lg">
                  <span className="font-bold text-sm">Pay with </span>M-Pesa
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Use a quick payment option to complete the transaction.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border p-3 bg-gray-100 rounded-md">
                <h2 className="font-bold text-gray-500">DELIVERY ADDRESS</h2>
                <small className="text-gray-400 font-semibold">
                  All fields required
                </small>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <label className="font-semibold" htmlFor="phone_number">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-1 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="email">
                      Phone number*
                    </label>
                    <input
                      type="tel"
                      name="phone_number"
                      id="phone_number"
                      placeholder="Enter phone number"
                      className="w-full px-3 py-1 border rounded-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <label className="font-semibold" htmlFor="phone_number">
                      First name*
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      placeholder="Enter first name"
                      className="w-full px-3 py-1 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="email">
                      Last name*
                    </label>
                    <input
                      type="text"
                      name="phone_number"
                      id="email"
                      placeholder="Enter last name"
                      className="w-full px-3 py-1 border rounded-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <label className="font-semibold" htmlFor="phone_number">
                      Delivery Address*
                    </label>
                    <input
                      type="text"
                      name="delivery_address "
                      id="email"
                      placeholder="Enter delivery address"
                      className="w-full px-3 py-1 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="email">
                      Town*
                    </label>
                    <select
                      id="small"
                      class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                    >
                      <option selected>Choose your town</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <label className="font-semibold" htmlFor="phone_number">
                      County/State*
                    </label>
                    <select
                      id="small"
                      className="block w-full p-1.2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                    >
                      <option selected>Choose your county</option>
                      <option value="US">Nairobi</option>
                      <option value="CA">Kiambu</option>
                      <option value="FR">Kajiado</option>
                      <option value="DE">Mombasa</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="email">
                      Postal Code
                    </label>
                    <input
                      type="tel"
                      name="phone_number"
                      id="email"
                      placeholder="Enter phone number"
                      className="w-full px-3 py-1 border rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="border"></div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Checkout
