const initState = {
  products: [],
  numberCart: 0,
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'Add-To-Cart') {
    if (state.numberCart === 0) {
      let items = {
        courseId: action.val.courseId,
        courseName: action.val.courseName,
        price: action.val.price,
      }
      state.products.push(items)
    } else {
      let check = false
      state.products.map((item) => {
        if (item.courseId === action.val.courseId) {
          check = true
        }
        return null
      })

      if (!check) {
        let _items = {
          courseId: action.val.courseId,
          courseName: action.val.courseName,
          price: action.val.price,
        }
        state.products.push(_items)
      }
    }

    return {
      ...state,
      numberCart: state.numberCart + 1,
    }
  }
  if (action.type === 'Delete') {
    let newProducts = state.products.filter((eachItem) => {
      return eachItem !== action.val
    })
    return {
      numberCart: state.numberCart - 1,
      products: newProducts,
    }
  }
  return state
}

export default rootReducer
