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

## Propositional and logical

___

Mệnh đề hay mệnh đề logic là một phát biểu khẳng định một sự kiện nào đó, sao cho khẳng định đó chỉ nhận một trong hai giá trị hoặc đúng hoặc sai, không thể nhập nhằng, nghĩa là không thể vừa đúng vừa sai, cũng không thể vừa không đúng vừa không sai.

Giá trị đúng, sai của một mệnh đề được gọi là chân trị của mệnh đề đó. Chân trị của mệnh đề đúng ký hiệu là $$T$$ $$(\mathbf{true})$$, chân trị của mệnh đề sai ký hiệu là $$F$$ $$(\mathbf{false})$$. Bảng chân trị của mệnh đề là bảng tổng kết các trường hợp đúng sai có thể xảy ra của mệnh đề đó. Sự xác định chân trị thường dựa vào thực nghiệm và lý luận bằng cách kết hợp các mệnh đề mà ta đã biết chân trị lại với nhau để tạo ra một mệnh đề mới. 

Ví dụ: $$2<3$$ là một mệnh đề đúng. $$3>4$$ là một mệnh đề sai. $$x+y=z$$ không phải là một mệnh đề vì nó chẳng đúng cũng chẳng sai vì các biến ở đây chưa được gán cho một giá trị cụ thể nào. "Một số thực âm không phải là số chính phương" không phải là mệnh đề vì nó có chân trị đúng nếu ta xét trên tập số thực $$\mathbb{R}$$ và có chân trị sai nếu xét trên tập số phức $$\mathbb{C}$$.

### Propositional calculus

Trong các phép tính mệnh đề, ta không quan tâm đến ý nghĩa của câu phát biểu mà [[chỉ chú ý đến chân trị của các mệnh đề::highlight]]. Do đó, khi thực hiện các mệnh đề thông thường ta không ghi rõ các câu phát biểu mà chỉ ghi ký hiệu. Các chữ cái sẽ được dùng để ký hiệu các mệnh đề. Những chữ cái thường dùng là $$p, q, r, \cdots $$.

Mệnh đề chỉ có một giá trị đơn ($$\mathbf{true}$$ hoặc $$\mathbf{false}$$) được gọi là mệnh đề nguyên từ — atomic proposition. Các mệnh đề không phải là mệnh đề nguyên từ gọi là mệnh đề phức hợp — compound propositions. Thông thường, tất cả các mệnh đề phức hợp là mệnh đề liên kết hay có chứa phép tính mệnh đề.

Các phép tính mệnh đề được sử dụng nhằm mục đích kết nối các mệnh đề lại với nhau tạo ra một mệnh đề mới. Các phép tính mệnh đề bao gồm: phép phủ định, phép hội, phép tuyển, phép $$\mathrm{XOR}$$, phép kéo theo và phép tương đương.

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

Tuy nhiên, có những phương pháp chứng minh đúng vì nó được dựa trên cơ sở của một mệnh đề hằng đúng và có những phương pháp chứng minh sai. Các phương pháp chứng minh sai này là do cố ý hoặc vô ý. Khi phương pháp chứng minh dựa trên một hằng sai thì sẽ mang lại kết quả sai nhưng ta vẫn cho là đúng thì được gọi là cố ý. Đôi khi có những phương pháp chứng minh dựa trên một tiếp liên mà ta tưởng lầm là hằng đúng nên cho là kết quả bao giờ cũng đúng thì trường hợp này gọi là vô ý hay ngộ nhận.

### Inference rules

Những suy luận có dùng các quy tắc suy diễn gọi là suy luận có cơ sở. Khi tất cả các suy luận có cơ sở là đúng thì sẽ dẫn đến một kết luận đúng. Một suy luận có cơ sở có thể dẫn đến một kết luận sai nếu một trong các mệnh đề đã dùng trong suy diễn là sai. Sau đây là bảng các quy tắc suy luận đúng.

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

Trong các phân số của quy tắc thì các giả thiết được viết trên tử số, kết luận được viết dưới mẫu số. Ký hiệu $$\therefore$$ có nghĩa là "vậy thì", "do đó"...

### The methods of proof

Mỗi bài toán cần chứng minh thông thường đều có hai phần chính là giả thiết và kết luận. Việc chỉ ra được cái nào là giả thiết, cái nào là
kết luận sẽ giúp cho việc chứng minh dễ dàng hơn thông qua việc sử dụng phương pháp chứng minh thích hợp. Do đó, các phương pháp chứng minh trong dạng bài toán này có liên quan đến mệnh đề kéo theo.

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

Điểm yếu của logic mệnh đề là chỉ có thể biểu diễn được các mệnh đề và các liên kết hoặc quan hệ giữa các mệnh đề. Vì vậy sức mạnh biểu diễn của logic mệnh đề chỉ giới hạn trong thế giới các mệnh đề. Nó không quan tâm đến nội dung các mệnh đề như thế nào. Vì thế mà logic mệnh đề có những hạn chế trong việc biểu diễn và suy diễn. Ví dụ, nếu chúng ta cho cơ sở tri thức phát biểu trong ngôn ngữ tự nhiên như sau: 
<br> $$p_1:=$$ "An là sinh viên"
<br> $$q:=$$ "Mọi sinh viên đều học giỏi"
<br> Với cơ sở tri thức như vậy ta có thể suy diễn ra rằng $$r_1:=$$ “An học giỏi”. Tuy nhiên logic mệnh đề không quan tâm đến nội dung bên trong các mệnh đề nên chúng ta không thể thực hiện suy diến $$(p_1\land q)\Rightarrow r_1$$ được vì chúng
chẳng liên quan gì với nhau. Nếu chúng ta biết được danh sách tất cả các sinh viên, chẳng hạn (An, Bình, …, Yến) thì chúng ta có thể chuyển câu “Mọi sinh viên đều học giỏi” thành câu phức trong logic mệnh đề dạng: $$(p_1\Rightarrow r_1)\land (p_2\Rightarrow r_2)\land \cdots \land (p_n\Rightarrow r_n)$$. Khi đó, sử dụng mệnh đề $$p_1$$ đã biết là đúng thì ta áp dụng luật Modus ponens trong logic mệnh đề thì suy diễn ra được $$r_1$$. 
<br> đ

## Tips reading mathematics
___

Chúng ta đã quen với việc đọc một văn bản văn học thuần túy theo chiều từ trái sang phải. Tuy nhiên, cách đọc của toán không hoàn toàn như vậy, một vài trường hợp đòi hỏi chúng ta cần phải đọc 2 chiều, thậm chí là 3 chiều. Ví dụ

$$\sum_{k=1}^{n}a_{i,k}b_{k,j}$$

Lúc đầu, chúng ta có thể đọc biểu thức này thành một biểu thức tuyến tính như sau:

$$c_{i,j}=\sum_{k=1}^{n}a_{i,k}b_{k,j}=a_{i,1}b_{1,j}+a_{i,2}b_{2,j}+ \cdots +a_{i,n}b_{n,j}$$
