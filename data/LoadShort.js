var LoadShort = `
    <div id="tradeBuyContent">
    <div class="col-xs-12">
        <div class="confirm-img float-left">
            <a href="/Contract/5996/Will-Obama&#39;s-2008-DNC-speech-sell-for-%241%2c500%2c000-or-more-at-auction-in-April">
                <img class=" img-responsive img-circle mb10" alt="Option Image" src="https://az620379.vo.msecnd.net/images/Contracts/beec30c1-a10e-4cbb-9bfb-15dd3035a88d.jpg">
            </a>
        </div>
        <p class="confirm-question">Will Obama&#39;s 2008 DNC speech sell for $1,500,000 or more at auction in April?</p>
    </div>
    <div class="clearfix"></div>

    <div class="col-xs-12">
        <p>Click on an Offer or enter your preference below. If you don't see a price you like, enter a lower one.</p>
    </div>
    <div class="col-xs-12 col-sm-5">

        <div class="panel panel-danger">
            <div class="panel-heading text-center">
                <h4 class="panel-title">Best Available Offers <a href="#" tabindex="0" data-toggle="popover"  data-placement="bottom" data-trigger="hover" class="pop-over" title="" data-content="Your open Offers are in blue."><i class="glyphicons circle_question_mark icon-small" title=""></i></a></h4>
            </div>
            <div class="panel-body offers">
                    <table class="table table-condensed table-info table-hover ">
                        <thead>
                        <tr>
                            <th>Shares</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>
                                        <a href="#" style="width: 100%; display: block" onclick="return false" title="500" id="SellQuantity-1">500</a>
                                    </td>
                                    <td>
                                        <a href="#" style="width: 100%; display: block" onclick="return false" title="500" id="SellPricePerShare-1">94<span style="font-family: helvetica;">¢</span></a>
                                        <script type="text/javascript">
                                            $('#SellQuantity-1').click(function() {
                                                var feasibleSellQuantity = '500';
                                                var sellPrice = '94';
                                                SetSellInputs(feasibleSellQuantity, sellPrice, 0, '1.00');
                                            });

                                            $('#SellPricePerShare-1').click(function() {
                                                var feasibleSellQuantity = '500';
                                                var sellPrice = '94';
                                                SetSellInputs(feasibleSellQuantity, sellPrice, 0, '1.00');
                                            });
                                        </script>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" style="width: 100%; display: block" onclick="return false" title="50" id="SellQuantity-2">50</a>
                                    </td>
                                    <td>
                                        <a href="#" style="width: 100%; display: block" onclick="return false" title="50" id="SellPricePerShare-2">95<span style="font-family: helvetica;">¢</span></a>
                                        <script type="text/javascript">
                                            $('#SellQuantity-2').click(function() {
                                                var feasibleSellQuantity = '550';
                                                var sellPrice = '95';
                                                SetSellInputs(feasibleSellQuantity, sellPrice, 0, '1.00');
                                            });

                                            $('#SellPricePerShare-2').click(function() {
                                                var feasibleSellQuantity = '550';
                                                var sellPrice = '95';
                                                SetSellInputs(feasibleSellQuantity, sellPrice, 0, '1.00');
                                            });
                                        </script>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" style="width: 100%; display: block" onclick="return false" title="500" id="SellQuantity-3">500</a>
                                    </td>
                                    <td>
                                        <a href="#" style="width: 100%; display: block" onclick="return false" title="500" id="SellPricePerShare-3">97<span style="font-family: helvetica;">¢</span></a>
                                        <script type="text/javascript">
                                            $('#SellQuantity-3').click(function() {
                                                var feasibleSellQuantity = '1050';
                                                var sellPrice = '97';
                                                SetSellInputs(feasibleSellQuantity, sellPrice, 0, '1.00');
                                            });

                                            $('#SellPricePerShare-3').click(function() {
                                                var feasibleSellQuantity = '1050';
                                                var sellPrice = '97';
                                                SetSellInputs(feasibleSellQuantity, sellPrice, 0, '1.00');
                                            });
                                        </script>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    </div>

    <div class="col-xs-12 col-sm-7">
<form action="/Trade/ConfirmTrade" data-ajax="true" data-ajax-failure="failedConfirm" data-ajax-loading="#spinnnerGo" data-ajax-method="POST" data-ajax-success="successConfirm" id="SellSubmit" method="post"><input name="__RequestVerificationToken" type="hidden" value="y51tHW0XdsNmugwANnmpGeGl6MkBOTY2ti-uMiQjB5jT9U0ecQ7Jb79-ovkoqyBifZeeHfhOJ086SHHNCp8ut1twFQ68NWQG3XFhZwubVesNR3qlKQ5yPVJarED4vYB20" /><input data-val="true" data-val-number="The field ContractId must be a number." data-val-required="The ContractId field is required." id="ContractId" name="ContractId" type="hidden" value="5996" />            <input type="hidden" id="TradeType" name="TradeType" value="0"/>
<form role="form">
    <div class="form-group">
        <label for="InputShares">Number of Shares</label>
        <div class="shares_buttons">
            <p>
                <button type="button" class="btn btn-danger" id="add10">10</button>
                <button class="btn btn-danger" type="button" id="add25">25</button>
                <button class="btn btn-danger" type="button" id="add50">50</button>
                <button class="btn btn-danger" type="button" id="add100">100</button>
                <button class="btn btn-danger" type="button" id="add250">250</button>
                <button class="btn btn-danger" type="button" id="add500">500</button>
            </p>
        </div>

        <div class="validation-error x-long full-width">
            <span class="field-validation-valid" data-valmsg-for="Quantity" data-valmsg-replace="true"></span>
            <input class="form-control full-width quantitySell" data-val="true" data-val-number="The field Quantity must be a number." data-val-regex="Only postive whole numbers are allowed" data-val-regex-pattern="^([1-9][0-9]*)$" data-val-required="Quantity is required" id="Quantity" min="1" name="Quantity" placeholder="Enter Quantity" type="number" value="" />
        </div>
    </div>

    <div class="form-group">
        <label for="InputPrice">Maximum Price (1<span style="font-family: helvetica;">¢</span> to 99<span style="font-family: helvetica;">¢</span>)</label>
        <div class="validation-error x-long full-width">
            <span class="field-validation-valid" data-valmsg-for="PricePerShare" data-valmsg-replace="true"></span>
            <div class="input-group">
               
                <input class="form-control full-width priceSell" data-val="true" data-val-number="The field PricePerShare must be a number." data-val-range="Price must be between 1¢ and 99¢" data-val-range-max="99" data-val-range-min="1" data-val-required="Price is required" id="PricePerShare" max="99" min="1" name="PricePerShare" placeholder="Max. Price (1¢-99¢)" type="number" value="" />
                <span class="input-group-addon"><span style="font-family: helvetica;">¢</span></span>
            </div>
        </div>
    </div>
</form>
<script>
    $('#add10').click(function () {
        $('#Quantity').val(10);
        forceQuantityValidation();
    });
    $('#add25').click(function () {
        $('#Quantity').val(25);
        forceQuantityValidation();
    });
    $('#add50').click(function () {
        $('#Quantity').val(50);
        forceQuantityValidation();
    });
    $('#add100').click(function () {
        $('#Quantity').val(100);
        forceQuantityValidation();
    });
    $('#add250').click(function () {
        $('#Quantity').val(250);
        forceQuantityValidation();
    });
    $('#add500').click(function () {
        $('#Quantity').val(500);
        forceQuantityValidation();
    });

    function forceQuantityValidation() {
        $('#PricePerShare').focus();
        $('#Quantity').focus();
        $('#PricePerShare').focus();
    }
</script></form>    </div>


    <div class="col-xs-12">
        <hr>
        <div class="float-right">
            <button type="button" class="btn btn-default" data-dismiss="modal" id="cancelModal" data-target="#no_short">Cancel</button>
            <button type="Button" class="btn btn-primary" id="submitSell">Preview</button>
        </div>
    </div>


    <script>
        var setAmount;
        $(function() {
            $("[data-toggle='popover']").popover();
        });

        $('#submitSell').click(function() {
            $('#SellSubmit').submit();
        });

        //After preview trade submitted
        function successConfirm(result) {
            $('#loadAdvancedBuy').empty();
            $('#space').remove();
            $('#tradeBuyContent').html(result);
        }

        function failedConfirm() {
            alert('There was a problem previewing your offer, Please try again');
        }


                     //First set inputs to best offers
        $(document).ready(function() {
            var quantity = '500';
            var amount = '94';
            setAmount = amount;

            var bestSellOffer = '0.94';


            if (bestSellOffer != 0.00) {
                $('.quantitySell').val(1);
                $('.priceSell').val(amount);
            } else {
                $('.quantitySell').val(1);
                $('.priceSell').val("");
            }

        });


        $(".quantitySell").keyup(function(e) {
            if (e.keyCode == 9) return false;

            var form = $('#SellSubmit');


            if ($('.priceSell').val() != "") {
                if (form.valid()) {
                    $('#submitSell').fadeIn();
                    var price = $('.priceSell').val();
                    var quantity = $('.quantitySell').val();

                    SetSellInputs(quantity, price, 0, '1.00');

                }
            }
        });


        $(".priceSell").keyup(function(e) {
            if (e.keyCode == 9) return false;

            var form = $('#SellSubmit');


            if ($('.quantitySell').val() != "") {
                if (form.valid()) {
                    $('#submitSell').fadeIn();
                    var price = $('.priceSell').val();
                    var quantity = $('.quantitySell').val();
                    SetSellInputs(quantity, price, 0, '1.00');

                }
            }
        });


        $('html').keyup(function(e) {
            if (e.keyCode == 8) {
                if ($('.priceSell').val() == "" || $('.quantitySell').val() == "") {
                }
            }
        });

        $.validator.unobtrusive.parse("#SellSubmit");

        $("#no_short").on('hidden.bs.modal', function() {
            $('#showSell').empty();
        });


        function SetSellInputs(quantity, price, tradeType) {
            $('.quantitySell').val(quantity);
            $('.priceSell').val(price);
        }

    </script>


    </div>
`

export {LoadShort};