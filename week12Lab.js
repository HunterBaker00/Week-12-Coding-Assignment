console.log(`-------------------------- 
Part 1: Setup your JSON server`)


const URL_ENDPOINT = 'http://localhost:3000/studentRoster'


console.log(
  `-------------------------- 
Part 2: GET and displaying the information`
)


  $.get(URL_ENDPOINT).then(data => {
    data.map(student => {
      $('tbody').append(
        $(`
        <tr>
          <td>${student.id}</td>
          <td>${student.fullName}</td>
          <td>${student.researchAssignment}</td>
          <td>
            <button class="btn btn-primary" onclick="deleteUser(${student.id})">🗑️</button>
          </td>
        </tr>
        `)
      )
    })
  })
/*------------------------ Part 3: HTTP Verb: POST ------------------------*/
console.log(
  `-------------------------- 
Part 3: POST and adding new students`
)





$('#submitStudent').click(function () {
  $.post(URL_ENDPOINT, {
    fullName: $('#fullName').val(),
    researchAssignment: $('#newAssignment').val(),
  })
})
/*------------------------ Part 4: HTTP Verb: DELETE ------------------------*/
console.log(
  `-------------------------- 
Part 4: DELETE and deleting individual students`
)





function deleteUser (id) {
  $.ajax(`${URL_ENDPOINT}/${id}`, {
    type: 'DELETE'
  })
}

/*------------------------ HTTP Verb: UPDATE ------------------------*/
console.log(
  `-------------------------- 
Part 4: PUT and updating the information`
)





function updateUser() {
  let id = $('#updateId').val()

  $.ajax(`${URL_ENDPOINT}/${id}`, {
    method: 'PUT',
    data: {
      fullName: $('#updateName').val(),
      researchAssignment: $('#updateAssignment').val(),
    }
  })
}

$('#updateStudent').click(updateUser)
console.log(`-----------Finished------------`)

/*------------------------ Optional: Style it with bootstrap! ------------------------*/

/**
 * Tables: https://getbootstrap.com/docs/5.3/content/tables/#overview
 * Forms: https://getbootstrap.com/docs/5.3/forms/overview/#overview
 *
 * There's no right or wrong here. Play around with different styles/reorganization.
 *
 * If you want some 'above and beyond' ideas:
 * 1) Instead of a table, look into organizing the students differently with bootstrap:
 *      Card, Accordion, Dropdowns, Popover, Tooltips
 *      Do a list group, and every item inside is one of the above
 * 3) Redo the update form - open the update form in a bootstrap modal when you click on
 *    a student, pass in the students id/name/assignment automatically to the form so the
 *    user can make edits to a form thats not initially blank.
 * 4) Re-style the delete button ASCII character to something more "modern"
 *
 */
