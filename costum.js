$(function() {
            // Main Menu JS
            $(window).scroll(function() {
                if ($(this).scrollTop() < 50) {
                    $("nav").removeClass("site-top-nav");
                    $("#back-to-top").fadeOut();
                } else {
                    $("nav").addClass("site-top-nav");
                    $("#back-to-top").fadeIn();
                }
            });

            // Shopping Cart Toggle JS
            $("#shopping-cart").on("click", function() {
                $("#cart-content").toggle("blind", "", 500);
            });

            // Back-To-Top Button JS
            $("#back-to-top").click(function(event) {
                event.preventDefault();
                $("html, body").animate({
                        scrollTop: 0,
                    },
                    1000
                );
            });

            // Delete Cart Item JS
            $(document).on("click", ".btn-delete", function(event) {
                event.preventDefault();
                $(this).closest("tr").remove();
                updateTotal();
            });

            // Update Total Price JS<script>
            $(document).ready(function() {
                function updateTotals() {
                    let grandTotal = 0;
                    $('#order-table tbody tr').each(function() {
                        const qty = parseInt($(this).find('.qty').val());
                        const price = parseFloat($(this).find('.price').text());
                        const total = qty * price;
                        $(this).find('.row-total').text(total.toFixed(2));
                        grandTotal += total;
                    });
                    $('#grand-total').text(grandTotal.toFixed(2));
                }

                // Update totals when quantity changes
                $(document).on('input', '.qty', updateTotals);

                // Delete row
                $(document).on('click', '.btn-delete', function(e) {
                    e.preventDefault();
                    $(this).closest('tr').remove();
                    updateTotals();
                });

                // Initial total calculation
                updateTotals();
            });