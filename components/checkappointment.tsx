import * as elements from "typed-html";
import BaseHtml from "../layouts/baseHtml";

const Checkappointment = () => {
  return (
    <BaseHtml>
        <div class="text-center d-flex flex-column text-align-center text-primary">
            <h1 class="my-5">Kiểm tra lịch hẹn</h1>

            <table class="my-5 text-center table table-striped table-bordered">
                <tr>
                    <th>Thời gian</th>
                    <th>Thứ 2</th>
                    <th>Thứ 3</th>
                    <th>Thứ 4</th>
                    <th>Thứ 5</th>
                    <th>Thứ 6</th>
                    <th>Thứ 7</th>
                </tr>

                <tr>
                    <td>7h30-11h30</td>
                    <td>Không có</td>
                    <td><a href="#">Có</a></td>
                    <td><a href="#">Có</a></td>
                    <td>Không có</td>
                    <td>Không có</td>
                    <td>Không có</td>
                </tr>

                <tr>
                <td>14h-18h</td>
                    <td>Không có</td>
                    <td><a href="#">Có</a></td>
                    <td><a href="#">Có</a></td>
                    <td>Không có</td>
                    <td><a href="#">Có</a></td>
                    <td>Không có</td>
                </tr>
            </table>
        </div>
    </BaseHtml>
  )
}

export default Checkappointment
