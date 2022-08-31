// libraries
import Swal from "sweetalert2";

// services
import { DeleteUser } from "../../services/users";

export const deleteSwal = async (name ?: string , id ?: number) => {

    let response : boolean = false;

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
    })
      
    await swalWithBootstrapButtons.fire({
        title: `Are you sure to delete ${name} ?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, I regretted it!',
        reverseButtons: true
    }).then(async (result) => {
        if (result.isConfirmed) {

            const deleteUser : boolean = await DeleteUser(id);

            if(deleteUser) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                response = true;

            } else {
                swalWithBootstrapButtons.fire(
                    'Unable to Delete!',
                    `
                        Something goes wrong !
                        <br />
                        Please refresh the page and Try again !
                    `,
                    'warning'
                )

                response = false;
            }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )

          response = false
        }
    })

    return response;
}