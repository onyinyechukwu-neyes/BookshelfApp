import React, {Component} from 'react';

class Contact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        message: "",
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleClick = (e) =>{
        e.preventDefault();
        
    }
    render() {
        return(
            <div>
                <section class="breadcrumb-section">
                    <h2 class="sr-only">Site Breadcrumb</h2>
                    <div class="container">
                        <div class="breadcrumb-contents">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb-item active">Contact</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section>
                <main class="contact_area inner-page-sec-padding-bottom">
                    <div class="container">
                        
                        <div class="row mt--60 ">
                            <div class="col-lg-5 col-md-5 col-12">
                                <div class="contact_adress">
                                    <div class="ct_address">
                                        <h3 class="ct_title">Location & Details</h3>
                                        <p>It is a long established fact that readewill be distracted by the readable content of
                                            a page when looking
                                            at ilayout.</p>
                                    </div>
                                    <div class="address_wrapper">
                                        <div class="address">
                                            <div class="icon">
                                                <i class="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div class="contact-info-text">
                                                <p><span>Address:</span> 1234 - Bandit Tringi lAliquam <br/> Vitae. New York</p>
                                            </div>
                                        </div>
                                        <div class="address">
                                            <div class="icon">
                                                <i class="far fa-envelope"></i>
                                            </div>
                                            <div class="contact-info-text">
                                                <p><span>Email: </span> support@example.com </p>
                                            </div>
                                        </div>
                                        <div class="address">
                                            <div class="icon">
                                                <i class="fas fa-mobile-alt"></i>
                                            </div>
                                            <div class="contact-info-text">
                                                <p><span>Phone:</span> (800) 0123 456 789 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
    
                            <div class="col-lg-7 col-md-7 col-12 mt--30 mt-md--0">
                                <div class="contact_form">
                                    <h3 class="ct_title">Send Us a Message</h3>
                                    <form id="contact-form" method="post" class="contact-form">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label>Your Name <span class="required">*</span></label>
                                                    <input type="text" 
                                                        id="con_name" 
                                                        name="name" 
                                                        onChange= {e => this.handleChange(e)}
                                                        value= {this.state.name}
                                                        class="form-control"
                                                        required />
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label>Your Email <span class="required">*</span></label>
                                                    <input type="email" 
                                                        id="email" 
                                                        name="email" 
                                                        onChange= {e => this.handleChange(e)}
                                                        value= {this.state.email}
                                                        class="form-control"
                                                        required/>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label>Your Phone*</label>
                                                    <input type="text" 
                                                        id="con_phone" 
                                                        name="phone" 
                                                        onChange= {e => this.handleChange(e)}
                                                        value= {this.state.phone}
                                                        class="form-control"
                                                        />
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label>Your Message</label>
                                                    <textarea id="con_message" 
                                                        name="message"
                                                        onChange= {e => this.handleChange(e)}
                                                        value= {this.state.message}
                                                        class="form-control"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-btn">
                                                    <button type="submit" 
                                                        value="submit" 
                                                        id="submit" 
                                                        class="btn btn-black"
                                                        name="submit"
                                                        onClick= {e => this.handleClick(e)}>send</button>
                                                </div>
                                                <div class="form__output"></div>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="form-output">
                                        <p class="form-messege"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
   
}

export default Contact;