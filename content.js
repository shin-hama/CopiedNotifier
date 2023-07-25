const ID = 'copied-extension-notification'
// Listen for copy event
document.addEventListener('copy', function (event) {
  // Only show notification if there's selected text
  if (!document.getSelection().toString().trim()) {
    return
  }

  console.log(event)
  // Remove existing notification if any
  const existingNotification = document.getElementById(ID)
  if (existingNotification) {
    document.body.removeChild(existingNotification)
  }

  // Create notification
  const notification = document.createElement('div')
  notification.textContent = 'Copied!'
  notification.id = ID

  document.body.appendChild(notification)

  // Remove notification after 2 seconds
  setTimeout(function () {
    if (document.body.contains(notification)) {
      document.body.removeChild(notification)
    }
  }, 2000)
})
