import "./styles/user.css"

export default function User(){
    return(
        <div>
            
            <button type="button" class="btn1 btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png"
                    width="25" height="25"/>
            </button>

           
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}