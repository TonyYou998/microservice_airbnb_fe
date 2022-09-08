
# Hướng dẫn code
## cài đặt các dependencies
cd vào folder chứa file package.json
dùng lệnh npm i
## Format src code
các pages của UI sẽ dc nằm trong containers>HomeTemplate(liên quan UI cho client)|HostTemplate(liên quan UI cho host)>TenTrangPage
vd:UI cho trang chủ sẽ nằm trong folder container>HomeTemplate>HomePage
đối với từng page phải chia thành các component và để vào folder component của page đó, file index.js của mỗi Page sẽ là nơi gọi các component ra. xem code mẫu.
## Route
sau khi code xong UI để hiển UI ứng với LinkTag tương ứng cần tạo route. Code của route nằm trong folder routes>index.js
format của 1 obj route:
    {
        exact:false, 
        path:"/resign", //địa chỉ của trang
        Component:ResignPage //tên component của page đó
    }
## Git
    Code chính sẽ nằm ở branch master
    khi thực hiện code vui lòng pull master sau đó checkout qua branch mới theo cú pháp git checkout -b feature_tên_trang 
    sau khi code xong vui thực hiện  git push
    tuyệt đối ko push lên master.
    khi thực hiện code task mới vui lòng checkout về lại master và dùng git pull một lần nữa
    sau đó mới thực hiện git checkout -b
