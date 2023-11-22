import React from "react"
import "./EstimateDesignPage.scss"
import ButtonWithIcon from "../../../components/button/ButtonWithIcon"
import corpseedImage from "../../../Images/corpseed-logo.png"

const EstimateDesignPage = ({ setEstimateOpenBtn }) => {
  const closeEstimate = () => {
    setEstimateOpenBtn((prev) => !prev)
  }

  return (
    <div className="estimate-ui-design">
      <div onClick={() => closeEstimate()} className="estimate-close">
        {/* <p >close</p> */}
        <div className="cross-two-icon">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="estimate-header">
        <div>
          <h2 className="estimate-text">
            <i className="fa-solid fa-calendar-days mr-2"></i>Estimate Details
          </h2>
        </div>
        <div>
          <button className="estimate-tabs">Notes</button>
          <button className="estimate-tabs">Edit</button>
          <button className="estimate-tabs">Convert to Invoice</button>
        </div>
      </div>
      <div className="estimate-action">
        <ButtonWithIcon
          data="Send Email"
          icon={<i class="fa-regular fa-envelope"></i>}
        />
        <ButtonWithIcon
          data="PDF"
          icon={<i class="fa-solid fa-download"></i>}
        />
        <ButtonWithIcon data="URL" icon={<i class="fa-solid fa-copy"></i>} />
        <ButtonWithIcon data="Print" icon={<i class="fa-solid fa-print"></i>} />
        <ButtonWithIcon
          data="Generate Estimate"
          icon={<i class="fa-solid fa-clipboard-list"></i>}
        />
        <ButtonWithIcon
          data="Upload Documents"
          icon={<i class="fa-solid fa-file-arrow-up"></i>}
        />
      </div>

      <div className="estimate-date">
        <p>25-10-23</p>
        <p>Estimate Invoice created</p>
      </div>

      <div className="invoice-box">
        <div className="py-1 all-between">
          <div className="brand-logo">
            <img src={corpseedImage} height="100px" width="100px" />
          </div>
          <div>
            <h4 className="estimate-heading">Estimate</h4>
            <p className="estimate-bold">#ESTD03684</p>
          </div>
        </div>

        <div className="py-1 all-between">
          <div>
            <p className="estimate-bold">Corpseed Ites Pvt Ltd</p>
            <p className="estimate-data">CN UN789342984237ESTD03684</p>
            <p className="estimate-data">2nd Floor, A-154 Block, Sector 63</p>
            <p className="estimate-data">Noida Utter Pardesh -201301</p>
          </div>
          <div>
            <h4 className="estimate-heading">Order No.</h4>
            <p className="estimate-bold">#SK203</p>
          </div>
        </div>

        <div className="py-2 all-between">
          <div>
            <p className="estimate-data">Bill To :</p>
            <p className="estimate-bold">Mind Masala</p>
          </div>
          <div>
            <h4 className="estimate-heading-bold">
              Due Ammount : &#8377; 25750.00
            </h4>
          </div>
        </div>

        <div className="py-2 all-between">
          <div>
            <p className="estimate-data">Ship To:</p>
            <p className="estimate-data">Mind Masala</p>
            <p className="estimate-data">
              No 108 Muthiya Street Terapuram Channai -600086
            </p>
            <p className="estimate-data">Place of Supply : Tamil nadu(33)</p>
          </div>
          <div>
            <p className="estimate-data mb-1"><b>Estimate Date: </b> 25-10-2023</p>
            <p className="estimate-data"><b>Order Date: </b> 25-10-2023</p>
          </div>
        </div>

        <div className="table-responsive estimate-table">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item & Description</th>
                <th scope="col">HSN</th>
                <th scope="col">Rate</th>
                <th scope="col">Gst %</th>
                <th scope="col">Gst Amt.</th>
                <th scope="col">Gst Ammount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <b>ERP Plastic Authorization</b>
                  <br />
                  Professional Fees
                </td>
                <td>9983</td>
                <td>15000.00</td>
                <td>18%</td>
                <td>2700.00</td>
                <td>17700.00</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  <b>ERP Plastic Authorization</b>
                  <br />
                  Professional Fees
                </td>
                <td>9983</td>
                <td>15000.00</td>
                <td>18%</td>
                <td>2700.00</td>
                <td>17700.00</td>
              </tr>

              <tr>
                <th scope="row"></th>
                <td>
                  <b>Total Quantity : 2</b>
                </td>
                <td></td>
                <td>
                  <b>22000.00</b>
                </td>
                <td></td>
                <td>
                  <b>3960.00</b>
                </td>
                <td>
                  <b>25960.00</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="estimate-words">
          <p>
            Total In Words:{" "}
            <b>INR Twenty Five Thousand Nine Hundred Sixty only.</b>
          </p>
        </div>

        <div className="tax-details">
          <p className="estimate-data">Tax Details:</p>
          <div className="tax-details-box">
            <div className="details-head">
              <p className="estimate-bold">HSN</p>
              <p className="estimate-bold">HSN</p>
              <p className="estimate-bold">HSN</p>
              <p className="estimate-bold">HSN</p>
            </div>
            <div className="details-body">
              <p className="estimate-data">HSN</p>
              <p className="estimate-data">HSN</p>
              <p className="estimate-data">HSN</p>
              <p className="estimate-data">HSN</p>
            </div>
          </div>
        </div>

        <div className="estimate-notes mt-2">
          <p className="estimate-bold">Notes: </p>
          <p className="estimate-data">
            This Estimate & Price Quotion is valid for 7 days from the date of
            issue
          </p>
          <p className="estimate-data">
            ERP PLASTIC WASTE AUTHORIZATION GOVERMENT FRR ON ACYUAL
          </p>
        </div>
        <div className="payment-option mt-2">
          <p className="estimate-bold">Payment Oprions: </p>
          <p className="estimate-data">
            <b>IMPS/NEFT : </b>This Estimate & Price Quotion is valid for 7 days
            from the date of issue
          </p>
          <p className="estimate-data">
            ERP PLASTIC WASTE AUTHORIZATION GOVERMENT FRR ON ACYUAL
          </p>
          <p className="estimate-data">
            ERP PLASTIC WASTE AUTHORIZATION GOVERMENT FRR ON ACYUAL
          </p>
        </div>
      </div>
    </div>
  )
}

export default EstimateDesignPage
