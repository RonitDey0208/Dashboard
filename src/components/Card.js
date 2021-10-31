import react from "react";
import "./styles/card.css"

export default function Card() {

    return (
        <div class="container" id="Card">
            <div class="row">
                
                <div class="col-4">
                    <div class="card" style={{ width: "18rem" }}>
                        <img src="https://thumbs.dreamstime.com/b/nutritionist-counseling-cartoon-composition-certified-nutritionist-counseling-appointment-cartoon-composition-dietitian-179553070.jpg" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">Dr. Snape</h5>
                            <p class="card-text">Dr. Snape is one of the finest counselors we have in Mumbai region.
                                With a five year experince in this field he already has the most amazing ratings by far.</p>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1"> Show more details </button>

                            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Dr. Snape</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>A mental health counselor provides support to those experiencing mental or emotional distress. They may use a variety of therapeutic techniques to help a person manage anxiety, depression, and other mental health conditions. a mental health counselor has received training to hold individual and group counseling sessions. They can diagnose mental health conditions, but they cannot prescribe medications.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card" style={{ width: "18rem" }}>
                        <img src="https://image.freepik.com/free-vector/women-sitting-couch-flat-color-vector-faceless-characters-talk-show-psychologist-counseling-isolated-cartoon-illustration-web-graphic-design-animation-lady-comforting-crying-friend_151150-2202.jpg" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">Dr. Steven Strange</h5>
                            <p class="card-text"> Dr. Strange is the youngest and most qualified amongst all the counsellors we have.
                                With a six year experince in this field he already has one of the most amazing ratings by far.</p>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3"> Show more details </button>

                            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Dr. Steven Strange</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>A mental health counselor provides support to those experiencing mental or emotional distress. They may use a variety of therapeutic techniques to help a person manage anxiety, depression, and other mental health conditions. a mental health counselor has received training to hold individual and group counseling sessions. They can diagnose mental health conditions, but they cannot prescribe medications.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card" style={{ width: "18rem" }}>
                        <img src="https://image.freepik.com/free-vector/psychologist-therapy-counseling-illustration-psychology-psychiatry_33099-658.jpg" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">Dr. Pym</h5>
                            <p class="card-text"> Dr. Hank Pym is the most experinced amongst all the counsellors we have.
                                With seven years of experince in this field and the lowest fees, he is the most popular choice.</p>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2"> Show more details </button>

                            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Dr. Pym</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>A mental health counselor provides support to those experiencing mental or emotional distress. They may use a variety of therapeutic techniques to help a person manage anxiety, depression, and other mental health conditions. a mental health counselor has received training to hold individual and group counseling sessions. They can diagnose mental health conditions, but they cannot prescribe medications.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}