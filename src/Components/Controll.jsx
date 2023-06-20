import { NavLink } from "react-router-dom";

function Controll() {
    return (
        <div>
            <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                style={{ position: "fixed", bottom: "0", zIndex: 1 }}
            >
                Mở danh sách test
            </button>
            <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabIndex={-1}
                id="offcanvasWithBothOptions"
            >
                <div className="offcanvas-header">
                    <h5 className="m-0">Danh sách test</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                    />
                </div>
                <div className="offcanvas-body d-flex flex-column gap-2">
                    {/* HOME */}
                    <NavLink to="/draganddrop">
                        <button className="btn btn-primary" data-bs-dismiss="offcanvas">
                            Drag And Drop
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
export default Controll;
