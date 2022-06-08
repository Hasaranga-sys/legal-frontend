import React from 'react'

const CaseDocumnet = () => {
  return (
    <div><h2 className='text-center mt-3'>Legal Case Document File</h2>
    <div>
      <br />
      <br />
   
      <div className="border card shadow-lg w-50 mx-auto p-3 text-center">
        
        <h3 className='mt-2 mb-3'>Add Legal Case Document File</h3>
        <form
        //   onSubmit={(e) => {
        //     saveResearchTopic(e);
        //   }}
        >
          <div>
            <div className="border row w-75 mx-auto mt-1">
              <label className=" border col-sm-6 col-form-label">Reference No</label>
              <input  name="groupId" className="form-control w-25"  placeholder="Enter Group ID" type="text"
                // value={groupId}
                // onChange={(e) => {
                //   setGroupId(e.target.value);
                // }}
                required
              />
            </div>

            <div className="border row w-75 mx-auto mt-3">
              <label className="border col-sm-6 col-form-label">Case File Sender's Reference NO</label>
              <input
                name="researchTopic"
                className="form-control w-50"
                type="text"
                placeholder="Enter topic"
                // value={researchTopic}
                // onChange={(e) => {
                //   setResearchTopic(e.target.value);
                // }}
                required
              />
            </div>

            <div className="row w-75 mx-auto mt-3">
              <label className="col-sm-6 col-form-label">Case File Sender</label>
              <input name="field"  className="form-control w-50" type="text" // value={field}
                     placeholder="Enter field" // onChange={(e) => { //   setField(e.target.value);  // }}  required
                      />
            </div>

            <div className="row w-75 mx-auto mt-3">
              <label className="col-sm-6 col-form-label">Description</label>
              <textarea name="field"  className="form-control w-50" type="text-area" // value={field}
                     placeholder="Enter field" // onChange={(e) => { //   setField(e.target.value);  // }}  required
                      />
            </div>

            <div className="row w-75 mx-auto mt-3">
              <label className="col-sm-6 col-form-label">Case Document File</label>
              <input name="field"  className="form-control w-50" type="text" // value={field}
                     placeholder="Enter field" // onChange={(e) => { //   setField(e.target.value);  // }}  required
                      />
            </div>

            <div className="row w-75 mx-auto mt-3">
              <label className="col-sm-6 col-form-label">Legal Officer</label>
              <input name="field"  className="form-control w-50" type="text" // value={field}
                     placeholder="Enter field" // onChange={(e) => { //   setField(e.target.value);  // }}  required
                      />
            </div>

            <div className="row w-75 mx-auto mt-3">
              <label className="col-sm-6 col-form-label">Account No/Telephone No</label>

             
            </div>

            <div className="row w-75 mx-auto mt-3">
              <label className="col-sm-6 col-form-label">Customer Name</label>
              <input name="field"  className="form-control w-50" type="text" // value={field}
                     placeholder="Enter field" // onChange={(e) => { //   setField(e.target.value);  // }}  required
                      />
            </div>


            <div className="row w-75 mx-auto mt-3 mb-4">
              <input
                className="btn btn-primary mt-4 mx-auto"
                type="submit"
                value="Save"
              />
            </div>

          
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                    </button>


                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button typeName="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button typeName="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>

            






          </div>
        </form>
      </div>
    </div>
    
    </div>
  )
}

export default CaseDocumnet