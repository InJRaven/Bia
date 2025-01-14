import { useContext } from "react";
import { TranslationContext } from "../../../context/TranslationContext";

const Service = () => {
  const { language } = useContext(TranslationContext);
  return (
    <>
      <div className="p-[1.6rem]  border border-gray-900 flex flex-col gap-[1.6rem]">
        <p className="text-md text-center font-medium break-words">
          {language === "en"
            ? "First, a rambling description of some of the technical details of a DZ custom cue. These details have varied only slightly over the years and are now considered my standard."
            : "Đầu tiên, một mô tả dài dòng về một số chi tiết kỹ thuật của một cây cơ DZ tùy chỉnh. Những chi tiết này chỉ thay đổi một chút theo thời gian và hiện nay được coi là tiêu chuẩn của tôi."}
        </p>

        <p className="text-md text-center font-medium break-words">
          {language === "en"
            ? 'Standard length is 58" with a joint diameter of .840" and a butt diameter of 1.270". The distance from the joint face to the wrap is usually 12.25" and the wrap is usually the same length. The standard buttcap material is Delrin or linen based phenolic.'
            : 'Chiều dài chuẩn là 58" với đường kính khớp nối là .840" và đường kính tay cầm là 1.270". Khoảng cách từ mặt khớp nối đến bọc tay cầm thường là 12.25" và chiều dài bọc tay cầm thường là như nhau. Vật liệu chuẩn của nắp tay cầm là Delrin hoặc phenolic có nguồn gốc từ vải lanh.'}
        </p>

        <p className="text-md text-center font-medium break-words">
          {language === "en"
            ? 'The joint screw I prefer is a modified 3/8-10 pin that uses a minor diameter of .308" - sometimes referred to as a 3/8-10 FB (flat bottom) pin. This pin has several advantages over the standard 3/8-10 pin. First, the minor diameter fits closely to the shaft. This may help with alignment but its main function is to tighten up the fit as compared to a 60° standard thread. Second, since the threads are slightly shallower, they machine much cleaner - again, promoting a close, accurate fit between the pin and the shaftwood. This translates to a very intimate connection between shaft & butt, giving you a better feel for what happens when your tip contacts the cueball.'
            : 'Con ốc khớp tôi ưa thích là một pin 3/8-10 được chỉnh sửa sử dụng đường kính nhỏ là .308" - đôi khi được gọi là pin 3/8-10 FB (đáy phẳng). Pin này có nhiều ưu điểm hơn so với pin 3/8-10 chuẩn. Đầu tiên, đường kính nhỏ khớp sát với trục cơ. Điều này có thể giúp căn chỉnh nhưng chức năng chính của nó là siết chặt độ khớp nối so với ren tiêu chuẩn 60°. Thứ hai, do các ren nông hơn một chút, chúng gia công sạch hơn - lại thúc đẩy độ khớp chính xác và gần gũi giữa pin và thân cơ. Điều này tạo ra một sự kết nối rất chặt chẽ giữa trục và tay cầm, giúp bạn cảm nhận tốt hơn khi đầu cơ của bạn tiếp xúc với bóng bi.'}
        </p>

        <p className="text-md text-center font-medium break-words">
          {language === "en"
            ? "To further enhance this fit, I use live tooling to machine my internal shaft threads - in fact, most threads - rather than using a tap, which has a tendency to tear wood. Live tooling cuts exceptionally clean threads that are more concentric than tapped threads and are full depth for maximum strength."
            : "Để tăng cường độ khớp nối này, tôi sử dụng công cụ trực tiếp để gia công các ren trục cơ bên trong của mình - thực tế là hầu hết các ren - thay vì sử dụng mũi khoan, có xu hướng làm rách gỗ. Công cụ trực tiếp cắt các ren cực kỳ sạch sẽ, đồng tâm hơn các ren khoan và có độ sâu đầy đủ để đảm bảo độ bền tối đa."}
        </p>

        <p className="text-md text-center font-medium break-words">
          {language === "en"
            ? "My shafts are typically 13 mm and use Tomahawk, Elforyn or Juma ferrules. These materials can be capped or not and they can be any length you want. I have several other options available (see the Repairs page)."
            : "Trục cơ của tôi thường có đường kính 13mm và sử dụng các loại đầu cơ Tomahawk, Elforyn hoặc Juma. Những vật liệu này có thể có nắp hoặc không và có thể có bất kỳ chiều dài nào bạn muốn. Tôi có nhiều lựa chọn khác (xem trang Sửa chữa)."}
        </p>

        <p className="text-md text-center font-medium break-words">
          {language === "en"
            ? 'My standard shaft taper grows 1/4 mm in the first 10" then grows smoothly from there. I have other tapers available, too. One is a longer pro taper that is available in 13 mm. There is also a stiffer taper that grows 1/2 mm in the first 10" and a jump/break shaft that is stiffer still.'
            : 'Độ côn tiêu chuẩn của trục cơ của tôi tăng 1/4 mm trong 10" đầu tiên và sau đó tăng mượt mà từ đó. Tôi cũng có những loại côn khác. Một loại là độ côn dài hơn có sẵn với kích thước 13mm. Cũng có loại côn cứng hơn tăng 1/2 mm trong 10" đầu tiên và một trục cơ cho cú nhảy/cắt cứng hơn nữa.'}
        </p>

        <p className="text-md text-center font-medium break-words">
          {language === "en"
            ? "Joint collars are threaded on, as are ferrules. I use the same live tooling technology on these external threads, too. Some people use compression dies which merely raise a little bump that cannot compare to the strength & integrity of a live tooled thread."
            : "Các vòng khớp nối được vặn vào, cũng như các đầu cơ. Tôi sử dụng công nghệ công cụ trực tiếp cho các ren bên ngoài này. Một số người sử dụng khuôn nén chỉ tạo ra một gò nhỏ mà không thể so sánh với độ mạnh và tính toàn vẹn của một ren được gia công bằng công cụ trực tiếp."}
        </p>

        <p className="text-md text-center font-medium break-words">
          {language === "en"
            ? "Any number of points can be installed in the forearm and/or the buttsleeve. Deep V-groove inlays with or without veneers are very popular. Some order butterfly points, floating points, inlays, boxes, etc. or any combination of the above."
            : "Bất kỳ số lượng điểm nào cũng có thể được cài đặt vào phần trước (forearm) và/hoặc phần tay cầm (buttsleeve). Các điểm khảm theo kiểu V sâu có hoặc không có ván lạng rất phổ biến. Một số người đặt làm các điểm bướm, điểm nổi, khảm, hộp, v.v., hoặc bất kỳ sự kết hợp nào của các kiểu trên."}
        </p>

        <p className="text-md text-center font-medium break-words">
          {language === "en"
            ? 'My standard joint trim is a simple 1/4" thick black linen collar on the shaft and behind the joint collar. This allows you to order a spare shaft with minimum downtime, should you decide you want one at a later date. This also makes adding an aftermarket shaft painless & less obvious. Of course, I can make virtually any type of custom trim ring if that is your preference. Of course, adding a spare shaft - or customizing an aftermarket shaft to match - will take more time.'
            : 'Phần trim khớp nối chuẩn của tôi là một vòng đen bằng vải lanh dày 1/4" trên trục và phía sau vòng khớp nối. Điều này cho phép bạn đặt làm trục thay thế với thời gian chờ tối thiểu, nếu bạn quyết định muốn có một cái sau này. Điều này cũng giúp việc thêm trục thay thế hoặc trục aftermarket trở nên dễ dàng và ít rõ ràng. Tất nhiên, tôi có thể làm bất kỳ loại vòng trang trí tùy chỉnh nào nếu đó là sở thích của bạn. Tuy nhiên, việc thêm trục thay thế hoặc tùy chỉnh trục aftermarket để khớp sẽ mất thêm thời gian.'}
        </p>

        <p className="text-md text-center font-medium break-words">
          {language === "en"
            ? "Textured black calfskin leather is the standard wrap but Irish Linen is available, also. My personal preference is NO wrap - just a figured piece of wood. This can cost a bit more but I like being able to grip the cue very lightly and still have enough friction that I don't worry about launching a 58\" missile across the table."
            : 'Da bê đen có kết cấu là bọc chuẩn, nhưng vải lanh Ireland cũng có sẵn. Sở thích cá nhân của tôi là KHÔNG có bọc - chỉ là một miếng gỗ có vân. Điều này có thể đắt hơn một chút, nhưng tôi thích việc có thể cầm cơ một cách nhẹ nhàng và vẫn có đủ độ ma sát để tôi không lo lắng về việc bắn một vật thể dài 58" qua bàn.'}
        </p>

        <p className="text-md text-center font-medium break-words">
          {language === "en"
            ? "I require 30% of the total price as a deposit to begin building your cue. If, for some reason, you change your mind about finishing your cue, I reserve the right to retain a portion of your deposit to cover my investment to that point. The amount retained can range between 50% and 100%, depending on the amount of personalization incorporated in your cue. It will take about 12 months to complete your cue & I'm proud to say most cues are done early."
            : "Tôi yêu cầu đặt cọc 30% tổng giá trị để bắt đầu xây dựng cây cơ của bạn. Nếu vì lý do nào đó, bạn thay đổi ý định về việc hoàn thành cây cơ, tôi có quyền giữ lại một phần của khoản đặt cọc để bù đắp cho khoản đầu tư của tôi vào thời điểm đó. Số tiền giữ lại có thể dao động từ 50% đến 100%, tùy thuộc vào mức độ cá nhân hóa được tích hợp trong cây cơ của bạn. Thời gian hoàn thành cây cơ sẽ khoảng 12 tháng và tôi tự hào khi nói rằng hầu hết các cây cơ được hoàn thành sớm."}
        </p>

        <p className="text-md text-center font-medium break-words">
          {language === "en"
            ? "Below is a table that will give you a place to start when figuring the cost of a DZ cue. Keep in mind that this is only a starting point. I factor in many variables such as rarity of woods, exceptional figure, total number of inlays, etc. Some things raise the price & some lower it."
            : "Dưới đây là một bảng giúp bạn bắt đầu khi tính toán chi phí của một cây cơ DZ. Hãy nhớ rằng đây chỉ là một điểm khởi đầu. Tôi tính đến nhiều yếu tố như độ hiếm của gỗ, vân gỗ đặc biệt, tổng số lượng khảm, v.v. Một số yếu tố sẽ làm tăng giá và một số yếu tố sẽ giảm giá."}
        </p>

        <p className="text-md text-center font-medium break-words">
          {language === "en"
            ? "One example: everybody wants AAA Grade Whatever wood in their cue. The knowledgeable shopper is aware that I can buy a blank of that wood for $30 so he expects me to charge accordingly. What he doesn't consider is that when I buy 24 pieces of the AAA Grade Whatever @ $30 each, I actually only receive maybe 3 pcs that qualify as true AAA Grade. The rest of the wood is nice...just not quite AAA. As such, I will charge much more for one of the true AAA pieces."
            : "Một ví dụ: mọi người đều muốn gỗ loại AAA trong cây cơ của họ. Người mua thông thái biết rằng tôi có thể mua một tấm gỗ loại đó với giá $30, vì vậy họ mong tôi tính phí tương ứng. Tuy nhiên, điều họ không tính đến là khi tôi mua 24 tấm gỗ loại AAA với giá $30 mỗi tấm, thực tế tôi chỉ nhận được khoảng 3 tấm đủ tiêu chuẩn AAA thực sự. Phần còn lại của gỗ vẫn tốt... chỉ không hoàn toàn là AAA. Vì vậy, tôi sẽ tính phí cao hơn rất nhiều cho một trong những tấm gỗ AAA thực sự."}
        </p>

        <p className="text-md text-center font-medium break-words">
          -----------------------------------------------------
        </p>

        <p className="text-md text-center font-medium break-words">
          {language === "en"
            ? "A word about Sneaky Petes (SP): these are made from full spliced (FS) blanks from various manufacturers. The base FS cue is usually curapay or purpleheart into straight grain maple. These are choice blanks from a reputable maker. The points are shorter & the returns are large & squared off but the construction is solid. The mid level FS blank is made by Kelly Peterson of MVP Cues. His points are much longer & the returns are small & tight. His construction is as good as it gets! Of course, these blanks are a bit more expensive but they are distinctive. The top level is a veneered FS blank from MVP. In my opinion, these are the best blanks available today. There are only a handful of people making these and, while their quality is generally quite good, I believe Kelly's work stands a level above everyone else's. His miters are flawless & the returns are usually under .020\" wide. You can see a sample of a rough MVP blank HERE."
            : 'Một vài lời về Sneaky Petes (SP): những cây cơ này được làm từ các tấm gỗ ghép (FS) hoàn chỉnh từ nhiều nhà sản xuất khác nhau. Cơ FS cơ bản thường là curapay hoặc purpleheart ghép vào gỗ phong vân thẳng. Đây là các tấm gỗ chọn lọc từ một nhà sản xuất uy tín. Các điểm (points) của chúng ngắn hơn và các đường khớp (returns) lớn và vuông vắn nhưng cấu trúc rất vững chắc. Cây cơ FS tầm trung được làm bởi Kelly Peterson của MVP Cues. Các điểm của anh ấy dài hơn nhiều và các đường khớp rất nhỏ và chặt. Cấu trúc của anh ấy là tốt nhất! Tất nhiên, các tấm gỗ này có giá đắt hơn một chút nhưng chúng rất đặc biệt. Cây cơ FS cấp cao là tấm gỗ ghép veneered từ MVP. Theo tôi, đây là những tấm gỗ tốt nhất hiện nay. Chỉ có một số ít người làm ra những tấm gỗ này và, mặc dù chất lượng của chúng thường rất tốt, tôi tin rằng công việc của Kelly vượt trội hơn tất cả những người khác. Các mối ghép của anh ấy không có khuyết điểm và các đường khớp thường có độ rộng dưới .020". Bạn có thể xem một mẫu tấm gỗ MVP thô TẠI ĐÂY.'}
        </p>
      </div>
      <div className="w-[70%] m-auto grid grid-cols-[_0.65fr_0.35fr] pt-[2rem]">
        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900">
          <p className="text-md font-medium ">
            Full Spliced (FS) Sneaky w/Delrin buttcap
          </p>
        </div>
        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-l-0">
          <p className="text-md font-medium ">Từ 12.000.000</p>
        </div>

        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-t-0">
          <p className="text-md font-medium ">
            Full Spliced (FS) Sneaky w/Delrin buttcap
          </p>
        </div>
        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-l-0 border-t-0">
          <p className="text-md font-medium ">Từ 12.000.000</p>
        </div>

        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-t-0">
          <p className="text-md font-medium ">
            Full Spliced (FS) Sneaky w/Delrin buttcap
          </p>
        </div>
        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-l-0 border-t-0">
          <p className="text-md font-medium ">Từ 12.000.000</p>
        </div>

        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-t-0">
          <p className="text-md font-medium ">
            Full Spliced (FS) Sneaky w/Delrin buttcap
          </p>
        </div>
        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-l-0 border-t-0">
          <p className="text-md font-medium ">Từ 12.000.000</p>
        </div>

        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-t-0">
          <p className="text-md font-medium ">
            Full Spliced (FS) Sneaky w/Delrin buttcap
          </p>
        </div>
        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-l-0 border-t-0">
          <p className="text-md font-medium ">Từ 12.000.000</p>
        </div>

        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-t-0">
          <p className="text-md font-medium ">
            Full Spliced (FS) Sneaky w/Delrin buttcap
          </p>
        </div>
        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-l-0 border-t-0">
          <p className="text-md font-medium ">Từ 12.000.000</p>
        </div>

        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-t-0">
          <p className="text-md font-medium ">
            Full Spliced (FS) Sneaky w/Delrin buttcap
          </p>
        </div>
        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-l-0 border-t-0">
          <p className="text-md font-medium ">Từ 12.000.000</p>
        </div>

        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-t-0">
          <p className="text-md font-medium ">
            Full Spliced (FS) Sneaky w/Delrin buttcap
          </p>
        </div>
        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-l-0 border-t-0">
          <p className="text-md font-medium ">Từ 12.000.000</p>
        </div>

        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-t-0">
          <p className="text-md font-medium ">
            Full Spliced (FS) Sneaky w/Delrin buttcap
          </p>
        </div>
        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-l-0 border-t-0">
          <p className="text-md font-medium ">Từ 12.000.000</p>
        </div>

        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-t-0">
          <p className="text-md font-medium ">
            Full Spliced (FS) Sneaky w/Delrin buttcap
          </p>
        </div>
        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-l-0 border-t-0">
          <p className="text-md font-medium ">Từ 12.000.000</p>
        </div>

        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-t-0">
          <p className="text-md font-medium ">
            Full Spliced (FS) Sneaky w/Delrin buttcap
          </p>
        </div>
        <div className="flex items-center justify-center py-[0.8rem] border border-gray-900 border-l-0 border-t-0">
          <p className="text-md font-medium ">Từ 12.000.000</p>
        </div>
      </div>
    </>
  );
};
export default Service;
