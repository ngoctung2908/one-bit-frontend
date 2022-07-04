import React, { memo } from 'react'
import launchPadPng from 'assets/images/launchpad.png'
import insurancePng from 'assets/images/insurance.png'
import incubatorePng from 'assets/images/incubator.png'
import vestingPng from 'assets/images/vesting.png'
import Button from 'components/button/button'

export const AboutUs = memo(() => {
  return (
    <div className="mt-48">
      <h6 className=" text-center text-accent-blue font-bold uppercase">
        about us
      </h6>
      <p className=" text-center text-primary-light-8 text-4xl font-bold mt-4">
        Main Products and Services
      </p>
      <p className="text-center text-primary-light-8 text-[28px] font-semibold leading-9 mt-8">
        Chúng tôi vô cùng tự hào khi được giúp đỡ các thành viên trong hệ sinh
        thái Onebit tiếp cận với các nền tảng đầu tư theo cách dễ dàng nhất, an
        toàn nhất và hiệu quả nhất.
      </p>
      <div className="flex gap-x-24 mt-28 items-center">
        <img src={launchPadPng} className="max-w-[530px]" alt="" />
        <div>
          <h6 className="text-[32px] text-accent-light leading-[40px]">
            ONEBIT Startup Launchpad
          </h6>
          <p className="text-primary-light-8 tracking-[0.5px] mt-8">
            Hỗ trợ các dư án tiềm năng, gọi vốn. Là “bệ phóng” các dự án khởi
            nghiệp được Đỡ đầu bởi ONEBIT nhằm giúp các dự án tiềm năng ứng dụng
            Blockchain kêu gọi vốn đầu tư. Với sự chọn lọc kỹ càng cùng với hệ
            thống quản lý dòng tiền áp dụng công nghệ DAO, ONEBIT Startup
            Launchpad giúp làm tăng tính khả thi của dự án cũng như việc kiểm
            soát tài chính phù hợp giúp cho dự án giảm thiểu các rủi ro về tài
            chính và đảm bảo cho các quỹ đầu tư giảm thiểu được rui ro khi đầu
            tư.
          </p>
          <Button size="sm" className="mt-8">
            More Detail
          </Button>
        </div>
      </div>
      <div className="flex gap-x-24 mt-28 items-center">
        <div className="text-right">
          <h6 className="text-[32px] text-accent-light leading-[40px]">
            ONEBIT Crypto Insurance
          </h6>
          <p className="text-primary-light-8 tracking-[0.5px] mt-8">
            Giải pháp bảo hiểm để bảo vệ các khoản đầu tư tiền điện tử. Đây là
            một giải pháp bảo giảm thiểu sự rủi ro theo sự thay đổi giá của tài
            sản tiền điện tử. Điều này có nghĩa là người được bảo hiểm sẽ luôn
            được bồi thường cho giá trị cơ bản của tài sản được họ tự quản lý
            ngay cả khi thị trường biến động miễn là còn trong thời hạn hợp
            đồng.
          </p>
          <Button size="sm" className="mt-8 ml-auto">
            More Detail
          </Button>
        </div>
        <img src={insurancePng} className="max-w-[473px]" alt="" />
      </div>
      <div className="flex gap-x-24 mt-28 items-center">
        <img src={incubatorePng} className="max-w-[530px]" alt="" />
        <div>
          <h6 className="text-[32px] text-accent-light leading-[40px]">
            ONEBIT Incubator
          </h6>
          <p className="text-primary-light-8 tracking-[0.5px] mt-8">
            Đây là những dự án được ONEBIT đỡ đầu sẽ là những hạt giống trong hệ
            sinh thái của ONEBIT. Những dự án nằm trong ONEBIT Incubator sẽ nhận
            được sự hỗ trợ lớn từ ONEBIT Ventrues từ vốn, giải pháp marketing,
            giải pháp kinh doanh, pháp lý.... đây là những sự hỗ trợ tốt nhất để
            một dự án có thể phát triển.
          </p>
          <Button size="sm" className="mt-8">
            More Detail
          </Button>
        </div>
      </div>
      <div className="flex gap-x-24 mt-28 items-center">
        <div className="text-right">
          <h6 className="text-[32px] text-accent-light leading-[40px]">
            ONEBIT Crypto Advertising
          </h6>
          <p className="text-primary-light-8 tracking-[0.5px] mt-8">
            Đây là một Crypto advertising platforms dành cho lĩnh vực Crypto,
            Forex, Chứng khoán. Onebit đang sở hữu 500,000 thành viên cũng như
            là đối tác của 50 tờ báo nội địa và hơn 600 đầu báo quốc tế. Onebit
            Crypto advertising sẽ lựa chọn các dự án tốt để hỗ trợ và đưa ra
            giải pháp truyền thông phù hợp cho dự án phát triển và tiếp cận được
            cộng đồng tiềm năng.
          </p>
          <Button size="sm" className="mt-8 ml-auto">
            More Detail
          </Button>
        </div>
        <img src={vestingPng} className="max-w-[473px]" alt="" />
      </div>
    </div>
  )
})
