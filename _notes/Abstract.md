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

## Tips reading mathematics

___

Mọi người thường đọc một văn bản một cách liền mạch từ trái sang phải và từ trên xuống dưới kèm theo một bối cảnh cụ thể. Điều này khiến cho tư duy thông thường của chúng ta là phải hiểu rõ hết mọi thứ trước khi đọc sang phần kế tiếp. 

Cách đọc toán lại hoàn toàn khác, thỉnh thoảng bạn sẽ không hiểu phần trước nếu chưa đọc phần sau, đôi khi dành phần lớn thời gian để nghiền ngẫm câu từ lại không hiệu quả bằng việc tham khảo qua các ví dụ hoặc hình ảnh và tất nhiên bạn sẽ phải đọc với số chiều nhiều hơn 2. Sau đây là một số chia sẻ về việc đọc toán mà tôi cho rằng nó hữu ích với mọi người.

### Why do problem exists?

Hầu hết mọi người được tiếp cận với toán từ sớm, tuy nhiên không phải ai cũng thích chúng. Bởi vì, dù bạn đạt điểm cao trong các kỳ thi về toán thì nó vẫn là một môn học khó nhằn, đó là chưa kể đến việc bạn muốn tìm hiểu nó bằng một ngôn ngữ khác.

Điều này là một vấn đề nan giải của toàn nhân loại, đúng hơn nó là một sự phân bổ của chọn lọc tự nhiên. Tuy nhiên, chấp nhận sự thật hiển nhiên khác với việc cố gắng hoàn thành tốt một khóa toán học. Dưới đây là một vài nguyên nhân làm cho vấn đề này luôn tồn tại bên cạnh nguyên nhân chính kể trên và cách khắc phục chúng.

...* Ký hiệu và quy tắc sử dụng chúng

Cách tiếp cận chính quy để đọc được các ký hiệu toán học là bạn nên tham gia một khóa học ngắn về [[Ngôn ngữ Hy-la::highlight]]. Nếu bị ràng buộc bởi thời gian, bạn có thể lần lượt tìm hiểu và sử dụng song song hai trang [The On-Line Encyclopedia of Integer Sequences](https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols) và [Rapid Tables](https://www.rapidtables.com/math/symbols/Basic_Math_Symbols.html) trong quá trình đọc. Lý do mà tôi đề xuất chúng là bởi vì, xét về mặt nội dung nó tạm được cho là đầy đủ. Hơn nữa, nó còn là một công cụ hữu ích giúp bạn nhanh chóng lấp đầy lỗ hổng kiến thức về "từ vựng và ngữ pháp toán" của bạn khi xét về mặt tiện lợi.






Tập trung vào các khái niệm chứ không phải bài tập là một điều kiện tiên quyết giúp đọc toán hiệu quả. Bởi vì có vô số dạng toán nên không có cách nào để học hết mọi kỹ thuật để giải bài toán đơn lẻ. Một khi bạn hiểu rõ các khái niệm, lúc bạn gặp một bài toán mới, bạn có thể biến đổi nó để có thể đưa bài toán trở về dạng cơ bản của khái niệm. 

## Propositional and logical

___

Mệnh đề hay mệnh đề logic là một phát biểu khẳng định một sự kiện nào đó, sao cho khẳng định đó chỉ nhận một trong hai giá trị hoặc đúng hoặc sai, không thể nhập nhằng, nghĩa là không thể vừa đúng vừa sai, cũng không thể vừa không đúng vừa không sai.

Giá trị đúng, sai của một mệnh đề được gọi là chân trị của mệnh đề. Chân trị của mệnh đề đúng ký hiệu là $$T$$ $$(\mathbf{true})$$, chân trị của mệnh đề sai ký hiệu là $$F$$ $$(\mathbf{false})$$. Bảng chân trị của mệnh đề là bảng tổng kết các trường hợp đúng sai có thể xảy ra của mệnh đề. Sự xác định chân trị thường dựa vào thực nghiệm và lý luận bằng cách kết hợp các mệnh đề mà ta đã biết chân trị lại với nhau để tạo ra một mệnh đề mới. 

Ví dụ: $$2<3$$ là một mệnh đề đúng. $$3>4$$ là một mệnh đề sai. $$x+y=z$$ không phải là một mệnh đề vì nó chẳng đúng cũng chẳng sai. "Một số thực âm không phải là số chính phương" không phải là mệnh đề vì nó có chân trị đúng nếu ta xét trên tập số thực $$\mathbb{R}$$ và có chân trị sai nếu xét trên tập số phức $$\mathbb{C}$$.

### Propositional calculus

Trong các phép tính mệnh đề, ta không quan tâm đến ý nghĩa của câu phát biểu mà [[chỉ chú ý đến chân trị của các mệnh đề::highlight]]. Do đó, thông thường ta không ghi rõ các câu phát biểu mà chỉ ghi ký hiệu. Các chữ cái sẽ được dùng để ký hiệu các mệnh đề. Những chữ cái thường dùng là $$p, q, r, \cdots $$.

Mệnh đề chỉ có một giá trị đơn ($$\mathbf{true}$$ hoặc $$\mathbf{false}$$) được gọi là mệnh đề nguyên từ — atomic proposition. Các mệnh đề không phải là mệnh đề nguyên từ gọi là mệnh đề phức hợp — compound propositions. Thông thường, tất cả các mệnh đề phức hợp là mệnh đề liên kết hay có chứa phép tính mệnh đề.

Các phép tính mệnh đề được sử dụng nhằm mục đích kết nối các mệnh đề lại với nhau để tạo ra một mệnh đề mới. Các phép tính mệnh đề bao gồm: phép phủ định, phép hội, phép tuyển, phép $$\mathrm{XOR}$$, phép kéo theo và phép tương đương.

#### Negation

Phủ định của mệnh đề $$p$$ là một mệnh đề, ký hiệu là $$\overline{p}$$ hay $$\neg{p}$$, đúng khi $$p$$ sai và sai khi $$p$$ đúng.

#### Conjunction

Hội của hai mệnh đề $$p, q$$ là một mệnh đề, đọc là $$p$$ và $$q$$, ký hiệu $$p \land q$$ hay $$p \cdot q$$, đúng khi cả hai mệnh đề $$p, q$$ cùng đúng và sai trong các trường hợp còn lại.

#### Disjunction

Tuyển của hai mệnh đề $$p, q$$ là một mệnh đề, đọc là $$p$$ hoặc $$q$$, ký hiệu là $$p \lor q$$ hay $$p + q$$, sai khi cả hai mệnh đề cùng sai và đúng trong trường hợp còn lại.

#### XOR

$$\mathrm{XOR}$$ của hai mệnh đề $$p, q$$ là một mệnh đề, đọc là $$p$$ xor $$q$$, ký hiệu là $$p\bigoplus q$$, đúng khi một trong hai mệnh đề đúng và sai trong các trường hợp còn lại.

#### Implication

$$p$$ kéo theo $$q$$ là một mệnh đề, ký hiệu là $$p \rightarrow q$$, chỉ sai khi $$p$$ đúng và $$q$$ sai và đúng trong các trường hợp còn lại. Lúc này mệnh đề $$p$$ được gọi là mệnh đề giả thiết còn mệnh đề $$q$$ được gọi là mệnh đề kết luận.

#### The truth table

$$\begin{array} {|c|c|} \hline
p &   q &   \neg{p}  &  p\land q &    p\lor q &     \mathrm{XOR}   & p\rightarrow q \\ \hline 
T &   T &   F        &  T        &    T       &     F              &  T             \\ \hline
T &   F &   F        &  F        &    T       &     T              &  F             \\ \hline
\color{Red} F &   T &   T        &  F        &    T       &     T              &  \color{Red} T \\ \hline
F &   F &   T        &  F        &    F       &     F              &  T             \\ \hline
\end{array}$$

#### Biconditional

Nhìn vào phần chữ đỏ của bảng chân trị, ta thấy vấn đề của phép kéo theo là từ một mệnh đề sai, ta có thể suy ra mọi thứ mà vẫn có một mệnh đề đúng. Ý tưởng để giải quyết tình trạng này là sử dụng hai lần phép kéo theo ngược chiều hay đảo đề của nhau[[$$p\rightarrow q = q\rightarrow p$$::rsn]]. Đây là ý tưởng của phép tương đương.

$$p$$ tương đương $$q$$ là một mệnh đề, ký hiệu là $$p\leftrightarrow q$$, đúng nếu cả hai mệnh đề $$p$$ và $$q$$ cùng đúng hoặc cùng sai.

Bảng chân trị mới với phép tương đương được thêm vào:

$$\begin{array} {|c|c|} \hline
p              &   q              &  \neg{p}  &  p\land q &  p\lor q &  \mathrm{XOR} & p\rightarrow q & p\leftrightarrow q  \\ \hline 
T &    T &  F        &  T        &  T       &  F            &  T             & T      \\ \hline
T              &   F              &  F        &  F        &  T       &  T            &  F             & F                   \\ \hline
\color{Red} F              &   T              &  T        &  F        &  T       &  T            &  \color{Red} T & \color{Blue} F                   \\ \hline
 F &   F &  T        &  F        &  F       &  F            &  T & T      \\ \hline
\end{array}$$

### Consequents

Mục đích của các phép tính logic là tìm ra một mệnh đề có chân trị đúng từ các mệnh đề ban đầu mà ta đã biết chân trị của nó là đúng. Phép tính tương đương giải quyết vấn đề trên rất tốt, phần này sẽ giới thiệu về là một số khái niệm được sinh ra từ các phép tính mệnh đề và trình bày một số quy luật thường gặp của phép tương đương logic.

#### Tautologie, contradiction and contingency

Mệnh đề hằng đúng là một mệnh đề hoặc một biểu thức mệnh đề luôn có chân trị là đúng bất chấp sự lựa chọn chân trị của biến mệnh đề. Ví dụ $$\neg{p} \lor p \equiv \mathbf{true}$$.

Mệnh đề hằng sai là một mệnh đề hoặc một biểu thức mệnh đề luôn có chân trị là sai bất chấp sự lựa chọn chân trị của biến mệnh đề. Ví dụ $$\neg{p} \lor p \equiv \mathbf{false}$$.

Mệnh đề tiếp liên là một biểu thức mệnh đề không phải là mệnh đề hằng đúng và không phải là mệnh đề hằng sai. Ví dụ, mệnh đề $$(p\land q) \lor \neg{q}$$ là một mệnh đề tiếp liên vì ngoài trường hợp chân trị đúng vẫn còn có trường hợp chân trị sai. 

$$\begin{array} {|c|c|c|c|c|} \hline
p &   q &   \neg{q}     &  p\land q &    (p\land q) \lor \neg{q}     \\ \hline 
T &   T &   F &             T &           T                           \\ \hline
T &   F &   T &             F &           T                            \\ \hline
F &   T &   F &             F &          \color{Red} F                  \\ \hline
F &   F &   T &             F &           T                              \\ \hline
\end{array}$$

#### Consequence

Với $$f, g$$ là hai biểu thức mệnh đề, $$g$$ là mệnh đề hệ quả của $$f$$ hay $$g$$ được suy ra từ $$f$$ nếu $$f\rightarrow g$$ là một mệnh đề hằng đúng, ký hiệu là $$f \mapsto g$$. Ví dụ, cho $$f = (p \rightarrow q)\land (q \rightarrow r)$$ và $$g = p \rightarrow r$$, chứng minh $$f\mapsto g$$.

$$\begin{array} {|c|c|}\hline p & q & r & p \rightarrow q & q \rightarrow r & f & g & f\rightarrow g \\ \hline T & T & T & T & T & T & T & T \\ \hline T & T & F & T & F & F & F & T \\ \hline T & F & T & F & T & F & T & T \\ \hline T & F & F & F & T & F & F & T \\ \hline F & T & T & T & T & T & T & T \\ \hline F & T & F & T & F & F & T & T \\ \hline F & F & T & T & T & T & T & T \\ \hline F & F & F & T & T & T & T & T \\ \hline  \end{array}$$

Nhìn vào bảng trên ta thấy, nếu $$g$$ là hệ quả của $$f$$ thì khi $$f$$ đúng bắt buộc $$g$$ phải đúng, ngược lại khi $$g$$ đúng ta chưa thể kết luận được gì về chân trị của $$f$$. Đặc biệt, khi với giả thiết mệnh đề $$f$$ đúng ta chứng minh được mệnh đề $$g$$ cũng đúng thì ta nói mệnh đề $$f$$ suy ra mệnh đề $$g$$, ký hiệu là $$f \Rightarrow g$$ hay $$g \Leftarrow f$$. Lúc này ta nói $$f$$ là điều kiện đủ để có $$g$$ và $$g$$ là điều kiện cần để có $$f$$. [[$$( \lvert a \rvert < b) \Rightarrow (b>0)$$ nhưng từ $$b>0$$ không suy ra được $$ \lvert a \rvert < b $$.::srs]] 

#### Logical equivalence

Hai mệnh đề $$p, q$$ được gọi là tương đương logic nếu chúng có cùng một chân trị và phép tương đương của $$p$$ và $$q$$ là một hằng đúng. Đặc biệt, khi $$p \Rightarrow q$$ và $$q \Rightarrow p$$ thì ta nói mệnh đề $$p$$ tương đương mệnh đề $$q$$, ký hiệu là $$p \Leftrightarrow q$$. Lúc này ta nói $$p, q$$ lần lượt là điều kiện cần và đủ để có $$q, p$$.

| Equivalence laws | Name |
| ------------- |-------------|
| $$p \lor T \Leftrightarrow T$$ <br> $$p \land F \Leftrightarrow F$$ | Domination laws |
| $$p \land T \Leftrightarrow p$$ <br> $$p \lor F \Leftrightarrow p$$ | Identity laws |
| $$p \lor p \Leftrightarrow p$$ <br> $$p \land p \Leftrightarrow p$$ | Idempotent laws |
| $$\neg{(\neg{p})}$$ | Double negation law |
| $$p \lor \neg{p} \Leftrightarrow T$$ <br> $$p \land \neg{p} \Leftrightarrow F$$ | Cancellation laws |
| $$p \lor q \Leftrightarrow q \lor p$$ <br> $$p \land q \Leftrightarrow q \land p$$ | Commutative laws |
| $$(p \lor q)\lor r \Leftrightarrow p \lor (q \lor r)$$ <br> $$(p \land q)\land r \Leftrightarrow p \land (q \land r)$$ | Associative laws |
| $$p \lor (q \land r) \Leftrightarrow (p\lor q)\land (p\lor r)$$ <br> $$p \land (q \lor r) \Leftrightarrow (p\land q)\lor (p\land r)$$ | Distributive laws |
| $$\neg{(p\land q)} \Leftrightarrow \neg{p} \lor \neg{q}$$ <br> $$\neg{(p\lor q)} \Leftrightarrow \neg{p} \land \neg{q}$$ | De Morgan’s laws |
| $$(p\rightarrow q) \Leftrightarrow (\neg{p}\lor q)$$ | Implication laws |
| $$p\lor (p\land q) \Leftrightarrow p$$ <br> $$p\land (p\lor q) \Leftrightarrow p$$ | Received laws |

##  Inference mathematics

___

Suy luận toán học dựa trên nền tảng của các phép toán mệnh đề, chủ yếu là phép kéo theo. Để chứng minh một vấn đề nào đó, thông thường ta phải xác định giả thiết và kết luận. Quá trình đi từ giả thiết đến kết luận gọi là quá trình chứng minh và quá trình này đươc thực thi bằng cách nào thì gọi đó là phương pháp chứng minh.

Các phương pháp chứng minh rất quan trọng vì không những chúng thường được sử dụng trong toán học mà còn được áp dụng nhiều trong tin học. Ví dụ, sự kiểm tra tính
đúng đắn của một chương trình, của một hệ điều hành, xây dựng các luật suy diễn trong lĩnh vực trí tuệ nhận tạo... Do đó, cần phải nắm vững các phương pháp chứng minh.

Tuy nhiên, có những phương pháp chứng minh đúng vì nó được dựa trên cơ sở của một mệnh đề hằng đúng và có những phương pháp chứng minh sai. Các phương pháp chứng minh sai này là do cố ý hoặc vô ý. Khi phương pháp chứng minh dựa trên một hằng sai thì sẽ mang lại kết quả sai nhưng ta vẫn cho là đúng thì được gọi là cố ý. Đôi khi có những phương pháp chứng minh dựa trên một tiếp liên mà ta tưởng lầm là hằng đúng nên cho là kết quả bao giờ cũng đúng thì trường hợp này gọi là vô ý hay ngộ nhận.

### Inference rules

Những suy luận có dùng các quy tắc suy diễn gọi là suy luận có cơ sở. Khi tất cả các suy luận có cơ sở là đúng thì sẽ dẫn đến một kết luận đúng. Một suy luận có cơ sở có thể dẫn đến một kết luận sai nếu một trong các mệnh đề đã dùng trong suy diễn là sai. Sau đây là bảng các quy tắc suy luận đúng.[[Trong các phân số của quy tắc thì các giả thiết được viết trên tử số, kết luận được viết dưới mẫu số. Ký hiệu $$\therefore$$ có nghĩa là "vậy thì", "do đó"...::srs]]

| Rules of inference | Tautology | Name |
| ------------- |-------------|-------------|
| $$\begin{array}{r} \\ \\ \therefore \end{array} \begin{array}{r} p \\ p\rightarrow q \\ \hline q \end{array}$$ |$$(p \land (p\rightarrow q))\rightarrow q$$| Modus ponens |
| $$\begin{array}{r} \\ \\ \therefore \end{array} \begin{array}{r} \neg{q} \\ p\rightarrow q \\ \hline \neg{p} \end{array}$$ |$$(\neg{q} \land (p\rightarrow q))\rightarrow \neg{p}$$| Modus tollens |
| $$\begin{array}{r} \\ \therefore \end{array} \begin{array}{r} (p \lor q) \lor r \\ \hline p \lor (q \lor r) \end{array}$$ |$$((p \lor q)\lor r)\rightarrow (q\lor (q\lor r))$$| Associative |
| $$\begin{array}{r} \\ \therefore \end{array} \begin{array}{r} p \land q \\ \hline q \land p \end{array}$$ |$$(p \land q)\rightarrow (q \land p)$$| Commutative |
| $$\begin{array}{r} \\ \\ \therefore \end{array} \begin{array}{r} p\rightarrow q \\ q\rightarrow p \\ \hline p\leftrightarrow q \end{array}$$ |$$((p\rightarrow q)\land (q\rightarrow p))\rightarrow (p\leftrightarrow q)$$| Law of biconditional propositions |
| $$\begin{array}{r} \\ \therefore \end{array} \begin{array}{r} (p\land q)\rightarrow r \\ \hline p\rightarrow (q\rightarrow r) \end{array}$$ |$$((p\land q)\rightarrow r)\rightarrow (p\rightarrow (q\rightarrow r))$$| Exportation |
| $$\begin{array}{r} \\ \therefore \end{array} \begin{array}{r} p\rightarrow q \\ \hline \neg{q}\rightarrow \neg{p} \end{array}$$ |$$(p\rightarrow q)\rightarrow (\neg{q}\rightarrow \neg{p})$$| Transposition or contraposition law |
| $$\begin{array}{r} \\ \\ \therefore \end{array} \begin{array}{r} p\rightarrow q \\ q\rightarrow r \\ \hline p\rightarrow r \end{array}$$ |$$((p\rightarrow q)\land (q\rightarrow r))\rightarrow (p\rightarrow r)$$| Hypothetical syllogism |
| $$\begin{array}{r} \\ \therefore \end{array} \begin{array}{r} p\rightarrow q \\ \hline \neg{p}\lor q \end{array}$$ |$$(p\rightarrow q)\rightarrow (\neg{p}\lor q)$$| Material implication |
| $$\begin{array}{r} \\ \therefore \end{array} \begin{array}{r} (p\lor q)\land r \\ \hline (p\land r)\lor (q\land r) \end{array}$$ |$$((p\lor q)\land r)\rightarrow ((p\land r)\lor (q\land r))$$| Distributive |
| $$\begin{array}{r} \\ \therefore \end{array} \begin{array}{r} p\rightarrow q \\ \hline p\rightarrow (p\land q) \end{array}$$ |$$(p\rightarrow q)\rightarrow (p\rightarrow (p\land q))$$| Absorption |
| $$\begin{array}{r} \\ \\ \therefore \end{array} \begin{array}{r} p\lor q \\ \neg{p} \\ \hline q \end{array}$$ |$$((p\lor q)\land \neg{p})\rightarrow q$$| Disjunctive syllogism |
| $$\begin{array}{r} \\ \therefore \end{array} \begin{array}{r} p \\ \hline p\lor q \end{array}$$ |$$p\rightarrow (p\lor q)$$| Addition |
| $$\begin{array}{r} \\ \therefore \end{array} \begin{array}{r} p\land q \\ \hline p \end{array}$$ |$$(p\land q)\rightarrow p$$| Simplification |
| $$\begin{array}{r} \\ \\ \therefore \end{array} \begin{array}{r} p \\ q \\ \hline p\land q \end{array}$$ |$$((p)\land (q))\rightarrow (p\land q)$$| Conjunction |
| $$\begin{array}{r} \\ \therefore \end{array} \begin{array}{r} p \\ \hline \neg{\neg{p}} \end{array}$$ |$$p\rightarrow (\neg{\neg{p}})$$| Double negation |
| $$\begin{array}{r} \\ \therefore \end{array} \begin{array}{r} p\lor p \\ \hline p \end{array}$$ |$$(p\lor p)\rightarrow p$$| Disjunctive simplification |
| $$\begin{array}{r} \\ \\ \therefore \end{array} \begin{array}{r} p\lor q \\ \neg{p}\lor r \\ \hline q\lor r \end{array}$$ |$$((p\lor q)\land (\neg{p}\lor r))\rightarrow (q\lor r)$$| Resolution |
| $$\begin{array}{r} \\ \\ \\ \therefore \end{array} \begin{array}{r} p\rightarrow q \\ r\rightarrow q \\ p\lor r \\ \hline q \end{array}$$ |$$((p\rightarrow q)\land (r\rightarrow q)\land (p\lor r))\rightarrow q$$| Disjunction elimination |

### The methods of proof

Mỗi bài toán cần chứng minh thông thường đều có hai phần chính là giả thiết và kết luận. Việc chỉ ra được cái nào là giả thiết, cái nào là
kết luận sẽ giúp cho việc chứng minh dễ dàng hơn thông qua việc sử dụng phương pháp chứng minh thích hợp.

Trước khi tìm hiểu các phương pháp chứng minh, ta hãy xem lại bảng chân trị của mệnh đề $$p$$ kéo theo $$q$$. Các trường hợp để cho mệnh đề $$p$$ kéo theo $$q$$ là đúng cũng chính là các phương pháp để chứng minh bài toán đúng.

$$\begin{array} {|c|c|} \hline
p &   q &    p\rightarrow q \\ \hline 
T &   T &     T             \\ \hline
T &   F &     F             \\ \hline
\color{Red} F &   T &     \color{Red} T \\ \hline
F &   F &     T \\ \hline
\end{array}$$

Nhận thấy rằng, $$p\rightarrow q$$ là đúng có 3 trường hợp. Các trường hợp này chính là các phương pháp chứng minh sẽ được trình bày dưới đây. Trước khi đi vào các phương pháp chứng minh, có một khái niệm mà chúng ta cần tìm hiểu, đó là khái niệm về "hàm mệnh đề".

#### Propositional function

Với các tập không rỗng $$A_1, A_2, \cdots , A_n$$ sao cho ứng với mỗi $$x_1\in A_1, x_2\in A_2, \cdots , x_n\in A_n$$ ta có một mệnh đề, ký hiệu $$P(x_1, x_2, \cdots ,x_n )$$. Ta nói $$P(x_1, x_2, \cdots ,x_n )$$ là một hàm mệnh đề theo $$n$$ biến $$x$$.

#### p is false

Dựa vào 2 dòng cuối của bảng chân trị, nhận thấy rằng khi $$p$$ sai, bất chấp kết luận $$q$$ thế nào thì mệnh đề $$p\rightarrow q$$ là luôn đúng. Vậy, để chứng minh mệnh đề $$p\rightarrow q$$ là đúng, ta chỉ cần chứng minh rằng $$p$$ là sai. Phương pháp chứng minh này được gọi là chứng minh rỗng. Phương pháp chứng minh rỗng thường được sử dụng để chứng minh các trường hợp đặc biệt của định lý.

Ví dụ, cho hàm mệnh đề $$P(n)= n^2>n~(\forall n>1)$$, chứng minh $$P(1) = \mathbf{true}$$.
<br>
Ta có giả thiết $$1>1$$ là sai, bất chấp kết luận $$1^2>1$$ là đúng hay sai thì $$P(1)$$ là đúng.

#### q is true

Dựa vào dòng 1 và dòng 3 của bảng chân trị, nhận thấy rằng khi $$q$$ đúng, bất chấp giả thiết $$p$$ là đúng hay sai thì mệnh đề $$p\rightarrow q$$ là luôn đúng. Vậy, để chứng minh mệnh đề $$p\rightarrow q$$ là đúng, ta chỉ cần chứng minh rằng $$q$$ là đúng. Phương pháp chứng minh này được gọi là chứng minh tầm thường. Phương pháp chứng minh tầm thường cũng được sử dụng để chứng minh các trường hợp đặc biệt của định lý.

Ví dụ, cho hàm mệnh đề $$P(n)= a^n>b^n~(\forall a,b \in \mathbb{Z}^{+}; a\geq b)$$, chứng minh $$P(0) = \mathbf{true}$$.
<br>
Ta có $$a^0=b^0=1$$, do đó $$a^0\geq b^0$$ là đúng. Vậy $$P(0)$$ là đúng bất chấp giả thiết $$a\geq b$$ là đúng hay sai.

#### Direct proof

Trong dòng 1 của bảng chân trị, mệnh đề $$p$$ kéo theo $$q$$ có thể được chứng minh bằng cách chỉ ra rằng nếu $$p$$ đúng thì $$q$$ cũng phải đúng. Nghĩa là tổ hợp $$p$$ đúng $$q$$ sai không bao giờ xảy ra. Phương pháp này được gọi là chứng minh trực tiếp.

Để thực hiện phương pháp chứng minh trực tiếp, ta giả sử rằng $$p$$ là đúng, sau đó sử dụng các quy tắc suy luận hay các định lý để chỉ ra rằng $$q$$ là đúng và kết luận $$p\rightarrow q$$ là đúng.

Ví dụ, chứng minh rằng nếu $$n$$ là số lẻ thì $$n^2$$ cũng là số lẻ.
<br>
Giả sử rằng giả thiết của định lý này là đúng, tức là n là số lẻ. Ta có
<br>
$$\begin{matrix}
                 &n    &=& 2k+1 &~(\forall k\in \mathbb{N})      \\ 
\Rightarrow      &n^2  &=& (2k+1)^2 &  \\
  &  &=& 4k^2+4k+1 & \\
  &  &=& 2(2k^2+2k)+1 &
\end{matrix}$$
<br> Vì $$2(2k^2+2k)+1$$ là số lẻ nên nếu $$n$$ là số lẻ thì $$n^2$$ cũng là số lẻ.

#### Indirect proof

Vì mệnh đề $$p\rightarrow q \leftrightarrow \neg{q}\rightarrow \neg{p}$$. Do đó, để chứng minh mệnh đề $$p\rightarrow q$$ là đúng, ta có thể chỉ ra rằng mệnh đề $$\neg{q}\rightarrow \neg{p}$$ là đúng.

Ví dụ, chứng minh rằng nếu $$3n+2$$ là số lẻ thì n là số lẻ.
<br>
Giả sử kết luận của phép kéo theo là sai, tức n là chẵn. Ta có
<br>
$$\begin{matrix}
                 &n    &=& 2k &~(\forall k\in \mathbb{N})      \\ 
\Rightarrow      &3n+2  &=& 3\times 2k+2 &  \\
  &  &=& 2(3k+1) &
\end{matrix}$$
<br> Vì $$2(3k+1)$$ là số chẵn nên nếu $$3n+2$$ là số lẻ thì $$n$$ là số lẻ.

#### Reductio ad absurdum

Chứng minh phản chứng thường được sử dụng để chứng minh mệnh đề $$p$$ là đúng. Trước hết, ta giả sử ngược lại rằng $$p$$ là sai hay $$\neg{p}$$ là đúng. Từ mệnh đề $$\neg{p}$$ là đúng dẫn đến kết luận $$q$$ sao cho $$\neg{p} \rightarrow q$$ phải đúng. Khi đó, ta chỉ ra rằng $$q$$ là một mâu thuẫn, nghĩa là: $$q=r\land \neg{r}$$. Vì $$\neg{p} \rightarrow q$$ phải đúng và chân trị của $$q=\mathbf{false}$$ nên ta suy ra rằng $$\neg{p}= \mathbf{false}\Rightarrow p=\mathbf{true}.$$

Phương pháp chứng minh phản chứng thường được sử dụng để chứng minh những vấn đề cơ bản và điều quan trọng trong kỹ thuật này là tìm ra được mâu thuẫn của $$r\land \neg{r}$$.

Ví dụ, chứng minh rằng $$\forall n\in \mathbb{N}$$ nếu $$n^2$$ là số chẵn thì $$n$$ là số chẵn.
<br> Giả sử $$n$$ là số lẻ, thì $$n=2k+1, k\in \mathbb{N}$$
<br> Khi đó $$n^2=(2k+1)^2=2(2k^2+2k)+1$$ là số lẻ. Mâu thuẫn với giả thiết $$n^2$$ là số chẵn. Suy ra điều giả sử sai. Vậy $$\forall n\in \mathbb{N}$$ nếu $$n^2$$ là số chẵn thì $$n$$ là số chẵn.

#### Induction

Quy nạp toán học thường sử dụng để chứng minh các mệnh đề dạng $$\forall nP(n)$$. Nguyên lý chứng minh quy nạp bao gồm 2 bước như sau:
<br> Bước cơ sở: Kiểm tra $$P(x_0)$$ là đúng với $$x_0$$ là giá trị đầu tiên của dãy số $$n$$.
<br> Bước quy nạp:
<br> — [[Dạng quy nạp yếu::highlight]], ta giả sử $$P(k)$$ là đúng khi $$n=k$$, từ đó suy ra $$P(k+1)$$ là đúng.
<br> — [[Dạng quy nạp mạnh::highlight]], ta giả sử nếu $$(P(x_0)\land P(x_1)\land \cdots \land P(k)) \rightarrow P({k+1})$$ là đúng thì $$P(n)$$ là mệnh đề đúng $$\forall n$$.

Ví dụ, chứng minh $$n < 2^n, n\in \mathbb{Z}^{+}$$.
<br>
Khi $$n=1$$, ta có $$1 < 2$$ mệnh đề đúng.
<br>
Giả sử mệnh đề đúng khi $$n=k$$, ta có $$k < 2^k$$. Ta cần chứng minh $$k + 1< 2^{k+1}$$.
<br>
Vì $$k<2^{k}\Rightarrow k+1<2^{k}+1<2^{k}+2=2^{k+1}$$. Do đó, $$n < 2^n, n\in \mathbb{Z}^{+}$$.

Ví dụ, chứng minh $$P(n)=n(n+1)(n+2), n \in \mathbb{Z}^{+}$$ luôn chia hết cho 6.
<br> $$P(1)=6$$ chia hết cho 6, $$\Rightarrow P(1)=\mathbf{true}$$.
<br> $$P(2)=24$$ chia hết cho 6, $$\Rightarrow P(2)=\mathbf{true}$$.
<br> $$\cdots $$
<br> Giả sử $$P(k)=k(k+1)(k+2), \forall n\leq k$$ chia hết cho 6. Ta có
<br> $$P(k+1)=k(k+1)(k+2)+3(k+1)(k+2)$$ chia hết cho 6 vì $$k(k+1)(k+2)$$ và $$3(k+1)(k+2)$$ đều chia hết cho 6, $$\Rightarrow P(n) = \mathbf{true}, \forall n\in \mathbb{Z}^{+}$$.

## Predicates and quantifiers

___

Logic mệnh đề có những hạn chế trong việc biểu diễn và suy diễn. Bởi vì tính đúng đắn của suy luận vừa nêu không chỉ dựa trên phụ thuộc hàm giữa các giá trị chân lý của các mệnh đề thành phần trong suy luận, mà còn dựa trên cấu trúc bên trong của các mệnh đề đó. Logic vị từ là trường hợp mở rộng của logic mệnh đề nghiên cứu những suy luận như vậy.

Vị từ là những biểu thức ngôn ngữ biểu thị một tính chất nào đó ở một đối tượng hoặc biểu thị một mối quan hệ nào đó giữa một số đối tượng. Trong đó, vị từ chỉ tính chất gọi là vị từ một ngôi, vị từ chỉ mối quan hệ giữa $$n$$ đối tượng gọi là vị từ $$n$$ ngôi. 

Tổng quát, cho $$A_1, \cdots , A_n$$ là $$n$$ tập hợp khác trống. Giả sử rằng ứng với mỗi $$(x_1, \cdots , x_n)=(a_1, \cdots , a_n)\in A_1\times \cdots \times A_n$$, ta có một mệnh đề $$p(a_1, \cdots , a_n)$$. Khi đó ta nói $$p=p(x_1, \cdots , x_n)$$ là một vị từ theo $$n$$ biến hay $$n$$ trọng lượng xác định trên không gian $$A_1\times \cdots \times A_n$$.

### Constants

Hằng là một giá trị xác định trong không gian của vị từ. Hằng được ký hiệu bởi các chữ thường và được dùng để đặt tên các đối tượng đặc biệt hay thuộc tính.

### Variable

Biến dùng để thể hiện các lớp tổng quát của các đối tượng hay các thuộc tính. Biến được ký hiệu bởi các chữ hoa.

### Function

Hàm dùng để thể hiện mối quan hệ giữa biến và hằng.
