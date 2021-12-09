const getters = {
  terminalList: state => state.terminals,
  bookingCategoryList: state => state.bookingCategories,
  availableTrucks: state => state.trucks,
  addOnServiceList: state => state.addOnServices,
  getCallUpPreviews: state => state.callUpPreview,
  getBookingActivities: state => {
    let derivedBookingActivities = []
    state.bookingActivities.map((activity, i) => {
      let bookinInfo = {
        _id: activity.userBookings[i]._id,
        ownedBy: activity.userBookings[i].ownedBy.name,
        terminal: activity.userBookings[i].terminalId.name,
        bookingCategory: activity.userBookings[i].bookingCategoryId.name,
        park: activity.userBookings[i].parkId.name,
        expectedDateOfArrival: activity.userBookings[i].expectedDateOfArrival,
        expectedTimeOfArrival: activity.userBookings[i].expectedTimeOfArrival,
        paymentStatus: activity.userBookings[i].paymentStatus,
        truck: {
          model: activity.truckInfo.truckModel,
          plateNo: activity.truckInfo.plateNo
        }
      }
      derivedBookingActivities.push(bookinInfo)
    })
    return derivedBookingActivities
  },
  getTrucksInParks: state => state.trucksInParks
}

export default getters