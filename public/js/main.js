// Fetch accessibility issues
const testAccessibility = async (e) => {
  e.preventDefault()

  const url = document.querySelector("#url").value

  if (url === "") {
    alert("Please add a url")
  } else {
    setLoading()

    const response = await fetch(`/api/test?url=${url}`)

    if (response.status !== 200) {
      setLoading(false)
      alert("Something went wrong")
    } else {
      const { issues } = await response.json()
      addIssuesToDOM(issues)
      setLoading(false)
    }
  }
}
// Add issues to DOM
const addIssuesToDOM = (issues) => {
  console.log(issues)
}

// Set loading state
const setLoading = (isLoading = true) => {
  const loader = document.querySelector(".loader")
  if (isLoading) {
    loader.style.visibility = "visible"
  } else {
    loader.style.visibility = "hidden"
  }
}

// Escape HTML
document.querySelector("#form").addEventListener("submit", testAccessibility)
