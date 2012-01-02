/*
 * Ext JS Library 1.1
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://www.extjs.com/license
 */


Ext.UpdateManager.defaults.indicatorText="<div class=\"loading-indicator\">Henter...</div>";if(Ext.View){Ext.View.prototype.emptyText="";}if(Ext.grid.Grid){Ext.grid.Grid.prototype.ddText="{0} markerede r\xc3\xa6kker";}if(Ext.TabPanelItem){Ext.TabPanelItem.prototype.closeText="Luk denne fane";}if(Ext.form.Field){Ext.form.Field.prototype.invalidText="V\xc3\xa6rdien i dette felt er ikke tilladt";}Date.monthNames=["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"];Date.dayNames=["S\xc3\xb8ndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","L\xc3\xb8rdag"];if(Ext.MessageBox){Ext.MessageBox.buttonText={ok:"OK",cancel:"Fortryd",yes:"Ja",no:"Nej"};}if(Ext.util.Format){Ext.util.Format.date=function(v,_2){if(!v){return"";}if(!(v instanceof Date)){v=new Date(Date.parse(v));}return v.dateFormat(_2||"d/m/Y");};}if(Ext.DatePicker){Ext.apply(Ext.DatePicker.prototype,{todayText:"I dag",minText:"Denne dato er f\xc3\xb8r den tidligst tilladte",maxText:"Denne dato er senere end den senest tilladte",disabledDaysText:"",disabledDatesText:"",monthNames:Date.monthNames,dayNames:Date.dayNames,nextText:"N\xc3\xa6ste m\xc3\xa5ned (Ctrl + h\xc3\xb8jre piltast)",prevText:"Forrige m\xc3\xa5ned (Ctrl + venstre piltast)",monthYearText:"V\xc3\xa6lg en m\xc3\xa5ned (Ctrl + op/ned pil for at \xc3\xa6ndre \xc3\xa5rstal)",todayTip:"{0} (mellemrum)",format:"d/m/y",startDay:1});}if(Ext.PagingToolbar){Ext.apply(Ext.PagingToolbar.prototype,{beforePageText:"Side",afterPageText:"af {0}",firstText:"F\xc3\xb8rste side",prevText:"Forrige side",nextText:"N\xc3\xa6ste side",lastText:"Sidste side",refreshText:"Opfrisk",displayMsg:"Viser {0} - {1} af {2}",emptyMsg:"Der er ingen data at vise"});}if(Ext.form.TextField){Ext.apply(Ext.form.TextField.prototype,{minLengthText:"Minimum l\xc3\xa6ngden for dette felt er {0}",maxLengthText:"Maksimum l\xc3\xa6ngden for dette felt er {0}",blankText:"Dette felt skal udfyldes",regexText:"",emptyText:null});}if(Ext.form.NumberField){Ext.apply(Ext.form.NumberField.prototype,{minText:"Mindste-v\xc3\xa6rdien for dette felt er {0}",maxText:"Maksimum-v\xc3\xa6rdien for dette felt er {0}",nanText:"{0} er ikke et tilladt nummer"});}if(Ext.form.DateField){Ext.apply(Ext.form.DateField.prototype,{disabledDaysText:"Inaktiveret",disabledDatesText:"Inaktiveret",minText:"Datoen i dette felt skal v\xc3\xa6re efter  {0}",maxText:"Datoen i dette felt skal v\xc3\xa6re f\xc3\xb8r {0}",invalidText:"{0} er ikke en tilladt dato - datoer skal angives i formatet {1}",format:"d/m/y"});}if(Ext.form.ComboBox){Ext.apply(Ext.form.ComboBox.prototype,{loadingText:"Henter...",valueNotFoundText:undefined});}if(Ext.form.VTypes){Ext.apply(Ext.form.VTypes,{emailText:"Dette felt skal v\xc3\xa6re en email adresse i formatet \"navn@dom\xc3\xa6ne.dk\"",urlText:"Dette felt skal v\xc3\xa6re et link (URL) i formatet \"http:/"+"/www.dom\xc3\xa6ne.dk\"",alphaText:"Dette felt kan kun indeholde bogstaver og \"_\" (understregning)",alphanumText:"Dette felt kan kun indeholde bogstaver, tal og \"_\" (understregning)"});}if(Ext.grid.GridView){Ext.apply(Ext.grid.GridView.prototype,{sortAscText:"Sort\xc3\xa9r stigende",sortDescText:"Sort\xc3\xa9r faldende",lockText:"L\xc3\xa5s kolonne",unlockText:"Fjern l\xc3\xa5s fra kolonne",columnsText:"Kolonner"});}if(Ext.grid.PropertyColumnModel){Ext.apply(Ext.grid.PropertyColumnModel.prototype,{nameText:"Navn",valueText:"V\xc3\xa6rdi",dateFormat:"d/m/Y"});}if(Ext.SplitLayoutRegion){Ext.apply(Ext.SplitLayoutRegion.prototype,{splitTip:"Tr\xc3\xa6k for at \xc3\xa6ndre st\xc3\xb8rrelsen.",collapsibleSplitTip:"Tr\xc3\xa6k for at \xc3\xa6ndre st\xc3\xb8rrelsen. Dobbelt-klik for at skjule."});}