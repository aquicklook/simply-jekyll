---
tags: preliminaries
---
{:.boxit}
I have a deep conviction that mathematics is about ideas, not just formulas and algorithms, and not just theorems and proofs.

<p class="drop-cap">
Hai mục tiêu cần đạt được khi tìm hiểu về một định lý: [[hiểu phát biểu::highlight]] và hiểu chứng minh. Mục tiêu thứ nhất quan trọng hơn mục tiêu thứ hai. Để làm được điều này cần sự thông hiểu về ngôn ngữ toán học bao gồm ký hiệu và quy tắc về cách sử dụng ký hiệu. 
</p>

Giống như các ngôn ngữ khác, ngôn ngữ của toán cũng có một số ký hiệu và quy tắc thường xuyên được sử dụng. Phần này sẽ giới thiệu về chúng và đưa ra một số chỉ dẫn về đọc toán.

Phương pháp để thành thạo ngôn ngữ thứ hai là bên cạnh việc củng cố ngữ pháp thì phải thường xuyên trau dồi vốn từ vựng. Do đó, công thức học toán hiệu quả thực sự không tồn tại với những ai ngại tìm hiểu.

___

## Propositional and logical

Mệnh đề hay mệnh đề logic là một phát biểu khẳng định một sự kiện nào đó, sao cho khẳng định đó chỉ nhận một trong hai giá trị hoặc đúng hoặc sai, không thể nhập nhằng, nghĩa là không thể vừa đúng vừa sai, cũng không thể vừa không đúng vừa không sai.

Ví dụ: $$2<3$$ là một mệnh đề đúng. $$3>4$$ là một mệnh đề sai. $$x+y=z$$ không phải là một mệnh đề vì nó chẳng đúng cũng chẳng sai vì các biến ở đây chưa được gán cho một giá trị cụ thể nào. "Một số thực âm không phải là số chính phương" không phải là mệnh đề vì nó có chân trị đúng nếu ta xét trên tập số thực $$\mathbb{R}$$ và có chân trị sai nếu xét trên tập số phức $$\mathbb{C}$$.

Giá trị đúng, sai của một mệnh đề được gọi là chân trị của mệnh đề đó. Chân trị của mệnh đề đúng ký hiệu là $$T$$ $$(\mathbf{true})$$, chân trị của mệnh đề sai ký hiệu là $$F$$ $$(\mathbf{false})$$. Bảng chân trị của mệnh đề là bảng tổng kết các trường hợp đúng sai có thể xảy ra của mệnh đề đó. Sự xác định chân trị thường dựa vào thực nghiệm và lý luận bằng cách kết hợp các mệnh đề mà ta đã biết chân trị lại với nhau để tạo ra một mệnh đề mới. 

### Propositional calculus

Trong các phép tính mệnh đề, người ta không quan tâm đến ý nghĩa của câu phát biểu mà [[chỉ chú ý đến chân trị của các mệnh đề::highlight]]. Do đó, khi thực hiện các mệnh đề thông thường người ta không ghi rõ các câu phát biểu mà chỉ ghi ký hiệu. Các chữ cái sẽ được dùng để ký hiệu các mệnh đề. Những chữ cái thường dùng là $$p, q, r, \cdots $$.

Mệnh đề chỉ có một giá trị đơn ($$\mathbf{true}$$ hoặc $$\mathbf{false}$$) được gọi là mệnh đề nguyên từ — atomic proposition. Các mệnh đề không phải là mệnh đề nguyên từ gọi là mệnh đề phức hợp — compound propositions. Thông thường, tất cả các mệnh đề phức hợp là mệnh đề liên kết hay có chứa phép tính mệnh đề.

Các phép tính mệnh đề được sử dụng nhằm mục đích kết nối các mệnh đề lại với nhau tạo ra một mệnh đề mới. Các phép toán mệnh đề bao gồm: phép phủ định, phép hội, phép tuyển, phép $$\mathrm{XOR}$$, phép kéo theo và phép tương đương.

**Phép phủ định — Negation**

Phủ định của mệnh đề $$p$$ là một mệnh đề, ký hiệu là $$\overline{p}$$ hay $$\neg{p}$$, đúng khi $$p$$ sai và sai khi $$p$$ đúng.

**Phép hội — Conjunction**

Hội của hai mệnh đề $$p, q$$ là một mệnh đề, đọc là $$p$$ và $$q$$, ký hiệu $$p \land q$$ hay $$p \cdot q$$, đúng khi cả hai mệnh đề $$p, q$$ cùng đúng và sai trong các trường hợp còn lại.

**Phép tuyển — Disjunction**

Tuyển của hai mệnh đề $$p, q$$ là một mệnh đề, đọc là $$p$$ hoặc $$q$$, ký hiệu là $$p \lor q$$ hay $$p + q$$, sai khi cả hai mệnh đề cùng sai và đúng trong trường hợp còn lại.

**Phép $$\mathbf{XOR}$$**

$$\mathrm{XOR}$$ của hai mệnh đề $$p, q$$ là một mệnh đề, đọc là $$p$$ xor $$q$$, ký hiệu là $$p\bigoplus q$$, đúng khi một trong hai mệnh đề đúng và sai trong các trường hợp còn lại.

**Phép kéo theo — Implication**

$$p$$ kéo theo $$q$$ là một mệnh đề, ký hiệu là $$p \rightarrow q$$, chỉ sai khi $$p$$ đúng và $$q$$ sai và đúng trong các trường hợp còn lại. Lúc này mệnh đề $$p$$ được gọi là mệnh đề giả thiết còn mệnh đề $$q$$ được gọi là mệnh đề kết luận.

**Phép tương đương — Biconditional**

$$p$$ tương đương $$q$$ là một mệnh đề, ký hiệu là $$p\leftrightarrow q$$, đúng nếu cả hai mệnh đề $$p$$ và $$q$$ cùng đúng hoặc cùng sai. Khi $$p \Rightarrow q$$ và $$q \Rightarrow p$$ thì ta nói mệnh đề $$p$$ tương đương mệnh đề $$q$$, ký hiệu là $$p \Leftrightarrow q$$. Lúc này ta nói $$p, q$$ lần lượt là điều kiện cần và đủ để có $$q, p$$.

**Bảng chân trị của các phép tính logic**

$$\begin{array} {|c|c|c|c|c|c|c|} \hline
p &   q &   \neg{p}     &  p\land q &    p\lor q &     p\rightarrow q &        p\leftrightarrow q \\ \hline 
T &   T &   F &             T &           T &           \color{Blue} T &       \color{Blue} T      \\ \hline
T &   F &   F &             F &           T &           F &                     F                    \\ \hline
F &   T &   T &             F &           T &           \color{Red} T &         F                     \\ \hline
F &   F &   T &             F &           F &           \color{Red} T &         T                      \\ \hline
\end{array}$$

Nhìn vào phần chữ đỏ của bảng chân trị, ta thấy phép kéo theo có vấn đề là từ một mệnh đề sai, ta có thể suy ra mọi thứ mà vẫn có một mệnh đề đúng. Để giải quyết tình trạng này cần phải loại bỏ phép kéo theo trong mệnh đề bằng cách sử dụng phép kéo theo 2 lần theo chiều ngược nhau hay đảo đề của nhau. Đó là ý tưởng cơ bản của phép tương đương logic và để sử dụng đúng phép tương đương này cần phải tuân theo một số luật nhất định như sau:

**Mệnh đề hằng đúng — Tautologie**

Mệnh đề hằng đúng là một mệnh đề hoặc một biểu thức mệnh đề luôn có chân trị là đúng bất chấp sự lựa chọn chân trị của biến mệnh đề. Tức là $$\neg{p} \lor p \equiv \mathbf{true}$$.

**Mệnh đề hằng sai — Contradiction**

Mệnh đề hằng sai là một mệnh đề hoặc một biểu thức mệnh đề luôn có chân trị là sai bất chấp sự lựa chọn chân trị của biến mệnh đề. Tức là $$\neg{p} \lor p \equiv \mathbf{false}$$.

**Mệnh đề liên tiếp - Contingency**

Mệnh đề tiếp liên là một biểu thức mệnh đề không phải là mệnh đề hằng đúng và không phải là mệnh đề hằng sai. Ví dụ, mệnh đề $$(p\land q) \lor \neg{q}$$ là một mệnh đề liên tiếp vì ngoài trường hợp chân trị đúng vẫn còn có trường hợp chân trị sai. 

$$\begin{array} {|c|c|c|c|c|} \hline
p &   q &   \neg{q}     &  p\land q &    (p\land q) \lor \neg{q}     \\ \hline 
T &   T &   F &             T &           T                           \\ \hline
T &   F &   T &             F &           T                            \\ \hline
F &   T &   F &             F &          \color{Red} F                  \\ \hline
F &   F &   T &             F &           T                              \\ \hline
\end{array}$$

**Mệnh đề hệ quả**

Với $$f, g$$ là hai biểu thức mệnh đề, $$g$$ là mệnh đề hệ quả của $$f$$ hay $$g$$ được suy ra từ $$f$$ nếu $$f\rightarrow g$$ là một mệnh đề hằng đúng, ký hiệu là $$f \mapsto g$$. Ví dụ: Cho $$f = (p \rightarrow q)\land (q \rightarrow r)$$ và $$g = p \rightarrow r$$, chứng minh $$f\mapsto g$$.

$$\begin{array} {|c|c|}\hline p & q & r & p \rightarrow q & q \rightarrow r & f & g & f\rightarrow g \\ \hline T & T & T & T & T & T & T & T \\ \hline T & T & F & T & F & F & F & T \\ \hline T & F & T & F & T & F & T & T \\ \hline T & F & F & F & T & F & F & T \\ \hline F & T & T & T & T & T & T & T \\ \hline F & T & F & T & F & F & T & T \\ \hline F & F & T & T & T & T & T & T \\ \hline F & F & F & T & T & T & T & T \\ \hline  \end{array}$$

Nhìn vào bảng trên ta thấy, nếu $$g$$ là hệ quả của $$f$$ thì khi $$f$$ đúng bắt buộc $$g$$ phải đúng, ngược lại khi $$g$$ đúng ta chưa thể kết luận được gì về chân trị của $$f$$. Nói cách khác, khi với giả thiết mệnh đề $$f$$ đúng ta chứng minh được mệnh đề $$g$$ cũng đúng thì ta nói mệnh đề $$f$$ suy ra mệnh đề $$g$$, ký hiệu là $$f \Rightarrow g$$ hay $$g \Leftarrow f$$. Lúc này ta nói $$f$$ là điều kiện đủ để có $$g$$ và $$g$$ là điều kiện cần để có $$f$$. [[$$( \lvert a \rvert < b) \Rightarrow (b>0)$$ nhưng từ $$b>0$$ không suy ra được $$ \lvert a \rvert < b $$.::srs]] 

**Tương đương logic - Logical equivalence**

Hai mệnh đề $$p, q$$ được gọi là tương đương logic nếu và chỉ nếu chúng có cùng chân trị.

## Tips reading mathematics
___

Chúng ta đã quen với việc đọc một văn bản văn học thuần túy theo chiều từ trái sang phải. Tuy nhiên, cách đọc của toán không hoàn toàn như vậy, một vài trường hợp đòi hỏi chúng ta cần phải đọc 2 chiều, thậm chí là 3 chiều. Ví dụ

$$\sum_{k=1}^{n}a_{i,k}b_{k,j}$$

Lúc đầu, chúng ta có thể đọc biểu thức này thành một biểu thức tuyến tính như sau:

$$c_{i,j}=\sum_{k=1}^{n}a_{i,k}b_{k,j}=a_{i,1}b_{1,j}+a_{i,2}b_{2,j}+ \cdots +a_{i,n}b_{n,j}$$
