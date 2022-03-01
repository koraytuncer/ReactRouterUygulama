import {
  BrowserRouter,
  Routes,
  Link,
  Route,
  useParams,
} from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const veri = [
  {
    id: 0,
    kategori: "Ana Kart",
    urun: "MSI",
    fiyat: 5000,
    aciklama:
      "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.",
  },
  {
    id: 1,
    kategori: "Harddisk",
    urun: "Western Digital",
    fiyat: 2000,
    aciklama:
      "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.",
  },
  {
    id: 2,
    kategori: "Ekran Kartı",
    urun: "NVDI",
    fiyat: 12000,
    aciklama:
      "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.",
  },
];

function Urunler() {
  const [modalShow, setModalShow] = useState({ durum: false, index: 0 });
  return (
    <div className="container">
      <div className="alert alert-primary" role="alert">
        <h3 className="text-center">Ürünler Sayfasına Hoşgeldiniz</h3>
      </div>
      <div className="container mb-3 px-0">
        <div className="row">
          {veri.map((item, index) => {
            return (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.urun}</h5>
                    <p className="card-text">{item.kategori}</p>
                    <p className="card-text">{item.aciklama}</p>
                    <button
                      onClick={() =>
                        setModalShow({ durum: true, index: index })
                      }
                      className="btn btn-primary"
                    >
                      Detay
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <MyVerticallyCenteredModal
        index={modalShow.index}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {veri.map((dr) => {
            return dr.id === props.index ? dr.urun : "";
          })}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          {veri.map((dr) => {
            return dr.id === props.index ? dr.kategori : "";
          })}
        </h4>
        <p>
          {veri.map((dr) => {
            return dr.id === props.index ? dr.aciklama : "";
          })}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Urunler;
