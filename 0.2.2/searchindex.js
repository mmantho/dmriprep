Search.setIndex({docnames:["api","api/dmriprep.config","api/dmriprep.interfaces","api/dmriprep.interfaces.images","api/dmriprep.interfaces.reports","api/dmriprep.interfaces.vectors","api/dmriprep.utils","api/dmriprep.utils.bids","api/dmriprep.utils.vectors","api/dmriprep.workflows","api/dmriprep.workflows.base","api/dmriprep.workflows.dwi","api/dmriprep.workflows.dwi.base","api/dmriprep.workflows.dwi.outputs","api/dmriprep.workflows.dwi.util","changes","index","installation","links","usage"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["api.rst","api/dmriprep.config.rst","api/dmriprep.interfaces.rst","api/dmriprep.interfaces.images.rst","api/dmriprep.interfaces.reports.rst","api/dmriprep.interfaces.vectors.rst","api/dmriprep.utils.rst","api/dmriprep.utils.bids.rst","api/dmriprep.utils.vectors.rst","api/dmriprep.workflows.rst","api/dmriprep.workflows.base.rst","api/dmriprep.workflows.dwi.rst","api/dmriprep.workflows.dwi.base.rst","api/dmriprep.workflows.dwi.outputs.rst","api/dmriprep.workflows.dwi.util.rst","changes.rst","index.rst","installation.rst","links.rst","usage.rst"],objects:{"dmriprep.config":{dumps:[1,1,1,""],environment:[1,2,1,""],execution:[1,2,1,""],from_dict:[1,1,1,""],get:[1,1,1,""],init_spaces:[1,1,1,""],load:[1,1,1,""],loggers:[1,2,1,""],nipype:[1,2,1,""],redirect_warnings:[1,1,1,""],to_filename:[1,1,1,""],workflow:[1,2,1,""]},"dmriprep.config.environment":{cpu_count:[1,3,1,""],exec_docker_version:[1,3,1,""],exec_env:[1,3,1,""],free_mem:[1,3,1,""],nipype_version:[1,3,1,""],overcommit_limit:[1,3,1,""],overcommit_policy:[1,3,1,""],templateflow_version:[1,3,1,""],version:[1,3,1,""]},"dmriprep.config.execution":{bids_description_hash:[1,3,1,""],bids_dir:[1,3,1,""],bids_filters:[1,3,1,""],boilerplate_only:[1,3,1,""],debug:[1,3,1,""],fs_license_file:[1,3,1,""],fs_subjects_dir:[1,3,1,""],init:[1,4,1,""],layout:[1,3,1,""],log_dir:[1,3,1,""],log_level:[1,3,1,""],low_mem:[1,3,1,""],md_only_boilerplate:[1,3,1,""],notrack:[1,3,1,""],output_dir:[1,3,1,""],output_spaces:[1,3,1,""],participant_label:[1,3,1,""],reports_only:[1,3,1,""],run_uuid:[1,3,1,""],templateflow_home:[1,3,1,""],work_dir:[1,3,1,""],write_graph:[1,3,1,""]},"dmriprep.config.loggers":{"default":[1,3,1,""],"interface":[1,3,1,""],cli:[1,3,1,""],init:[1,4,1,""],utils:[1,3,1,""],workflow:[1,3,1,""]},"dmriprep.config.nipype":{crashfile_format:[1,3,1,""],get_linked_libs:[1,3,1,""],get_plugin:[1,4,1,""],init:[1,4,1,""],memory_gb:[1,3,1,""],nprocs:[1,3,1,""],omp_nthreads:[1,3,1,""],plugin:[1,3,1,""],plugin_args:[1,3,1,""],resource_monitor:[1,3,1,""],stop_on_first_crash:[1,3,1,""]},"dmriprep.config.workflow":{anat_only:[1,3,1,""],fmap_bspline:[1,3,1,""],fmap_demean:[1,3,1,""],force_syn:[1,3,1,""],hires:[1,3,1,""],ignore:[1,3,1,""],longitudinal:[1,3,1,""],run_reconall:[1,3,1,""],skull_strip_fixed_seed:[1,3,1,""],skull_strip_template:[1,3,1,""],spaces:[1,3,1,""],use_syn:[1,3,1,""]},"dmriprep.interfaces":{BIDSDataGrabber:[2,2,1,""],BIDSDataGrabberOutputSpec:[2,2,1,""],DerivativesDataSink:[2,2,1,""],images:[3,0,0,"-"],reports:[4,0,0,"-"],vectors:[5,0,0,"-"]},"dmriprep.interfaces.BIDSDataGrabber":{input_spec:[2,3,1,""],output_spec:[2,3,1,""]},"dmriprep.interfaces.DerivativesDataSink":{out_path_base:[2,3,1,""]},"dmriprep.interfaces.images":{ExtractB0:[3,2,1,""],RescaleB0:[3,2,1,""],extract_b0:[3,1,1,""],median:[3,1,1,""],rescale_b0:[3,1,1,""]},"dmriprep.interfaces.images.ExtractB0":{input_spec:[3,3,1,""],output_spec:[3,3,1,""]},"dmriprep.interfaces.images.RescaleB0":{input_spec:[3,3,1,""],output_spec:[3,3,1,""]},"dmriprep.interfaces.reports":{AboutSummary:[4,2,1,""],AboutSummaryInputSpec:[4,2,1,""],SubjectSummary:[4,2,1,""],SubjectSummaryInputSpec:[4,2,1,""],SubjectSummaryOutputSpec:[4,2,1,""],SummaryInterface:[4,2,1,""],SummaryOutputSpec:[4,2,1,""]},"dmriprep.interfaces.reports.AboutSummary":{input_spec:[4,3,1,""]},"dmriprep.interfaces.reports.SubjectSummary":{input_spec:[4,3,1,""],output_spec:[4,3,1,""]},"dmriprep.interfaces.reports.SummaryInterface":{output_spec:[4,3,1,""]},"dmriprep.interfaces.vectors":{CheckGradientTable:[5,2,1,""]},"dmriprep.interfaces.vectors.CheckGradientTable":{input_spec:[5,3,1,""],output_spec:[5,3,1,""]},"dmriprep.utils":{bids:[7,0,0,"-"],vectors:[8,0,0,"-"]},"dmriprep.utils.bids":{collect_data:[7,1,1,""],validate_input_dir:[7,1,1,""],write_derivative_description:[7,1,1,""]},"dmriprep.utils.vectors":{DiffusionGradientTable:[8,2,1,""],bvecs2ras:[8,1,1,""],calculate_pole:[8,1,1,""],normalize_gradients:[8,1,1,""]},"dmriprep.utils.vectors.DiffusionGradientTable":{affine:[8,4,1,""],b0mask:[8,4,1,""],bvals:[8,4,1,""],bvecs:[8,4,1,""],generate_rasb:[8,4,1,""],generate_vecval:[8,4,1,""],gradients:[8,4,1,""],normalize:[8,4,1,""],normalized:[8,4,1,""],pole:[8,4,1,""],to_filename:[8,4,1,""]},"dmriprep.workflows":{base:[10,0,0,"-"],dwi:[11,0,0,"-"]},"dmriprep.workflows.base":{init_dmriprep_wf:[10,1,1,""],init_single_subject_wf:[10,1,1,""]},"dmriprep.workflows.dwi":{base:[12,0,0,"-"],init_dwi_preproc_wf:[11,1,1,""],init_dwi_reference_wf:[11,1,1,""],outputs:[13,0,0,"-"],util:[14,0,0,"-"]},"dmriprep.workflows.dwi.base":{init_dwi_preproc_wf:[12,1,1,""]},"dmriprep.workflows.dwi.outputs":{init_reportlets_wf:[13,1,1,""]},"dmriprep.workflows.dwi.util":{init_dwi_reference_wf:[14,1,1,""],init_enhance_and_skullstrip_dwi_wf:[14,1,1,""]},dmriprep:{config:[1,0,0,"-"],interfaces:[2,0,0,"-"],utils:[6,0,0,"-"],workflows:[9,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method"},terms:{"185614_2e1bf3df":1,"1a0":16,"27121_a22e51b47c544980bad594d5e0bb2d04":8,"351e":1,"3dautomask":14,"3dunif":14,"6mm":14,"9f0b38ebe26a":1,"class":[0,1,2,3,4,5,8],"default":[1,11,14,19],"export":1,"final":14,"float":8,"function":[0,1,17],"import":1,"int":[8,11,14],"new":[1,16,17],"return":8,"static":8,"switch":1,"true":[1,5,7,8],"try":17,ARS:8,For:[17,19],LAS:8,LPS:8,RAS:8,The:[1,8,14,16,17],Then:[11,14],There:17,These:17,Use:15,_bidsdatagrabberinputspec:2,_bidsdatagrabberoutputspec:2,_checkgradienttableinputspec:5,_checkgradienttableoutputspec:5,_config:1,_extractb0inputspec:3,_extractb0outputspec:3,_rescaleb0inputspec:3,_rescaleb0outputspec:3,about:10,aboutsummari:4,aboutsummaryinputspec:4,abov:17,absenc:1,access:1,accord:15,acquisit:16,across:[1,3],action:1,adapt:[11,14,16],add:[1,15],addit:17,address:16,adher:[15,17],advanc:16,affin:[8,11,14],afni:[14,16,17],after:[1,14,17],agnost:16,ahead:17,algorithm:[14,16],alia:[2,3,4,5],all:[1,3,8,10,17],allclos:5,alloc:1,allow:[1,17],allowed_ent:2,also:[15,17],altern:[1,17],amazonaw:8,ambiti:17,amd64:17,amplitud:8,analysi:16,analysis_level:17,analyt:1,anat_onli:1,anatom:[1,10,15],ani:[1,10,16],ant:[14,16,17],api:16,app:[17,19],appear:17,appli:14,applic:[14,16],approach:17,arg:[1,2],argument:[1,16,17],arrai:8,attempt:15,autom:[1,17],automat:16,avail:[1,14,16,17],averag:3,b0_ix:[3,11,14],b0_threshold:8,b0mask:8,b0s:[11,14],b_scale:8,back:15,bare:17,base:[0,1,2,3,4,5,8,9,11,15,16,17],baseinterfaceinputspec:4,bash:17,basi:1,basic:16,batteri:13,becom:16,been:8,befor:16,below:8,best:16,bet:14,better:16,bia:14,bias_corrected_fil:14,bid:[0,1,2,6,16,17],bids_description_hash:1,bids_dir:[1,7],bids_filt:1,bids_root:19,bids_valid:7,bidsdatagrabb:2,bidsdatagrabberoutputspec:2,bidslayout:1,big:15,binari:17,boilerpl:1,boilerplate_onli:1,brain:[1,14,16],branch:15,breed:16,bring:15,bugfix:15,build:[1,11,14,15,16,17],build_workflow:1,built:1,bval:[5,8],bval_fil:[11,12],bvec:[5,8],bvec_fil:[11,12],bvec_norm_epsilon:8,bvecs2ra:8,c3d:17,cach:1,calcul:[8,11,14],calculate_pol:8,call:[1,8],can:[1,16,17],capabl:[15,17],categori:1,challeng:16,chang:[1,15],changelog:15,chdir:[3,5],check:[5,8,15,17],checkgradientt:5,checkout:17,checkpoint:1,checksum:1,chose:17,circleci:15,classmethod:1,clean:16,cleanenv:19,cli:1,client:[1,17],cloud:16,code:[1,10,11,12,14,15],collect:[1,10],collect_data:7,com:[8,17],come:17,command:[1,16,17],commerci:16,common:19,compar:17,complex:16,compliant:1,compos:[8,17],comprehend:10,comput:1,config:[0,15,16],config_fil:1,configur:[0,16,17],consid:8,consist:1,consumpt:1,contact:17,contain:[1,16,19],container_command_and_opt:17,container_imag:17,content:15,continu:[1,15],contrast:[11,14],contribut:15,control:[11,12],conveni:1,convers:[1,8],convert:[1,8],coordin:8,copi:1,core:[2,3,4,5],coregistr:16,correct:[5,14],correctli:17,correspond:[1,8],count:15,cover:8,cpu:1,cpu_count:1,crashfil:1,crashfile_format:1,crawl:1,creat:[1,10,16,17],current:[1,17],custom:[2,11,14,15],daemon:17,data:[8,14,16,19],data_dir:[3,5],dataset:[1,3,11,14,16,19],dataset_descript:1,datasink:[2,13],deal:3,debian:17,debug:1,decai:3,decemb:16,definit:19,depend:[16,19],deploi:[15,17],deploy:15,deriv:[1,10,13],deriv_dir:7,derivatives_path:17,derivativesdatasink:2,descript:[1,17],design:[1,16],dict:1,dictionari:1,diffus:[8,10,11,12,16],diffusiongradientt:8,dilat:14,dimens:3,direct:10,directori:1,disabl:19,disk:1,distort:1,distribut:14,dmri:[11,12,16],dmriprep:[0,15,17,19],dmriprep_named_opt:17,doc:[15,17],docker:[1,15,16,19],dockerfil:[15,17],dockerout:19,document:[15,16,17],doe:1,drop:17,dump:1,dwi:[0,3,5,8,9,10,15,19],dwi_fil:[5,8,11,12,14],dwi_mask:[3,11,12,14],dwi_reference_wf:[11,14],each:[1,10,11,14,16],earli:1,easi:16,easili:[1,16],edu:19,either:1,element:14,enabl:1,encompas:16,engin:[1,17],enh:15,enhanc:[11,14],enhance_and_skullstrip_dwi_wf:14,enlist:1,ensur:[5,16],entiti:10,environ:[1,16,19],equip:16,error:1,estim:1,etc:[1,16],everi:1,exact:19,exampl:[3,5,8,17,19],exec_docker_vers:1,exec_env:[1,7],execut:[1,10,15,16,17],exercis:15,exist:1,extern:16,extra:17,extract:[1,3,11,14],extract_b0:3,extractb0:3,eye:8,fals:[1,8],field:[1,14],fieldmap:[1,19],file:[1,8,11,12,14,15,17,19],filenam:[1,8],filesystem:1,filetyp:8,filter:1,first:[1,15,17,19],fit:16,fix:[1,15],flag:[1,19],flake8:15,flat:1,fmap_bsplin:1,fmap_demean:1,fmriprep:15,folder:[1,10],follow:[17,19],force_syn:1,forkserv:1,format:[1,16],found:[1,17],frame:8,framework:17,free:[1,17,19],free_mem:1,freesurf:[1,10,16,17],freesurfer_hom:19,from:[1,3,11,14,16,17],from_dict:1,from_fil:[3,4,5],fs_licens:19,fs_license_fil:1,fs_subjects_dir:1,fsl:[14,16,17],full:[8,10],full_spher:5,fullds005:19,g199a496:1,gener:[1,4,11,14,16,17],generate_rasb:8,generate_vecv:8,get:[1,8,17],get_linked_lib:1,get_plugin:1,github:15,given:[1,8],googl:1,gradient:[5,8],graph:[1,10,11,12,14],guidelin:15,habitu:17,had:[11,14],half:8,hand:17,handl:[5,7,17],happen:1,hard:1,harvard:19,has:[1,16,17],have:[8,17],hello:17,help:16,hemispher:8,heurist:1,high:16,highli:19,hire:1,histogram:14,hoc:16,home:19,host:[17,19],how:17,hpc:16,html:[1,8,11,14,19],http:[8,17,19],hub:17,idea:17,identifi:[1,17],idiosyncrasi:16,ignor:[1,19],imag:[0,2,8,11,14,17,19],implement:[1,16],improv:17,in_bval:5,in_bvec:5,in_fil:[3,14],in_rasb:5,includ:[16,19],index:[11,14],indic:[11,14],individu:[11,14],infer:16,info:1,inform:[0,1,10],infrastructur:[15,17],init:1,init_dmriprep_wf:10,init_dwi_preproc_wf:[11,12],init_dwi_reference_wf:[11,12,14],init_enhance_and_skullstrip_dwi_wf:14,init_enhance_and_skullstrip_wf:[11,14],init_reportlets_wf:[11,12,13],init_single_subject_wf:10,init_spac:1,initi:[1,14,15],input:[2,3,4,5,7,10,11,12,14,19],input_bids_path:17,input_spec:[2,3,4,5],instal:[1,16,19],instanc:[1,10],instead:15,instruct:17,integr:15,intens:[3,11,14],interfac:[1,16,17],intermedi:1,interpret:[16,17],intersect:14,intervent:16,inu:14,inventori:16,involv:16,issu:1,iter:14,its:[11,14],januari:16,join:1,json:1,just:8,keep:1,kei:19,kernel:[1,17],known:[16,17],kwarg:[2,4],label:10,laptop:16,larg:16,last:[3,8],latest:[14,19],latex:1,layout:1,least:19,left:1,length:8,less:1,level:[1,17],librari:[1,16],licens:[1,16,17],lie:8,lightweight:17,like:1,limit:[1,17],line:[1,16,17],lineno:1,link:1,lint:15,linux:[1,17],list:[1,8,10,11,14,17],load:[1,15],loadtxt:5,local:[15,19],locat:[8,13,19],log:[0,16],log_dir:1,log_level:1,logger:1,logitudin:1,longitudin:1,look:1,loos:14,low:8,low_mem:1,machin:17,magic:1,mai:[10,11,14],maint:15,maintain:1,mainten:15,make:[8,17],makefil:15,manag:1,mani:17,manual:[16,19],mark:15,markdown:1,mask:[8,11,12,14],mask_fil:[3,14],mathemat:14,maximum:[11,14],maxtasksperchild:1,md_only_boilerpl:1,mean:1,median:[3,11,14],memori:1,memory_gb:1,messag:[1,17],metal:17,method:[0,17,19],methodolog:[11,14],mgh:19,mgr:1,minim:[1,15],mode:1,model:16,modifi:17,modul:[0,1,2,6,9,11],monitor:1,more:17,morpholog:14,most:[8,17],mri:[10,16],multi:17,multiproc:1,multiprocess:1,multithread:1,must:[1,8,17,19],n4biasfieldcorrect:14,name:[11,13,14,17],named_opt:17,ndarrai:8,necessari:17,need:[1,10],neurodock:17,neuroimag:[16,17],neuroscientist:16,neurostar:16,newer:16,newpath:3,newrasb:5,next:17,nifti:[1,11,12,14],nii:[3,5],nilearn:16,niprep:[17,19],nipyp:[1,2,3,4,5,16,17],nipype_vers:1,niworkflow:[2,7,11,14],nmr:19,node:14,non:[1,8],none:[1,2,3,4,5,8],nonstandard:1,norm:8,norm_val:8,norm_vec:8,normal:[8,16],normalize_gradi:8,notrack:1,novemb:16,nproc:1,number:[1,8,10,11,14],numer:16,numpi:8,oasis30:1,object:[1,8],obtain:[17,19],oldrasb:5,omp_nthread:[1,11,14],onc:17,one:[10,14,19],ones:8,onli:1,onlin:19,oper:[1,8,17],oppos:10,opt:[1,19],option:[1,15,17],orchestr:12,org:16,organ:10,other:[0,11,14,16,17],othewis:8,our:17,out:[1,15,17,19],out_path_bas:2,out_rasb:5,out_report:14,output:[0,1,5,9,11,12,14,16,17],output_dir:1,output_spac:1,output_spec:[2,3,4,5],over:3,overcommit:1,overcommit_limit:1,overcommit_polici:1,packag:[0,16,17],page:15,pair:8,parallel:[1,14],paramet:[1,8,10,11,12,14],part:19,particip:[1,19],participant_id:1,participant_label:[1,7],particular:[1,16],pass:[1,19],patch:2,path:[1,8,11,12,17,19],pathlik:10,pdf:[10,11,12,14],perform:[10,14,16],pickl:1,pip:17,pipelin:[10,16],plan:1,platform:1,pleas:17,plugin:[1,15],plugin_arg:1,png:[10,11,12,14],point:[8,19],pole:[5,8],polici:1,popul:10,popular:17,popylar:15,posix:1,posixpath:1,possibl:[1,19],pre:11,pre_mask:14,preambl:17,prepar:[10,16,19],preprocess:[1,10,11,12,16],price:17,princip:19,principl:15,probabl:17,process:[1,10,11,14,15,16,19],produc:17,program:16,project:1,properti:8,provid:16,pub:8,pull:17,pypi:17,python:[1,16],qualiti:16,raise_insuffici:1,ram:1,rapid:16,rasb:8,rasb_fil:8,raw:8,raw_ref_imag:[11,14],read:[1,17],readi:17,reason:17,recent:8,recommend:[16,19],recon:[1,10],reconstruct:1,redirect:1,redirect_warn:1,ref_imag:[11,14],ref_image_brain:[11,14],refactor:15,refer:[1,8,11,14,15],regard:1,regardless:10,regist:[11,14,19],registr:19,registri:15,regular:1,rel:17,releas:15,remov:[1,14,15],replac:7,report:[0,1,2,10,13,15],reportlet:[1,4,11,13,14],reportlets_dir:13,reportlets_wf:13,reports_onli:1,repres:1,represent:15,reproduc:16,requir:[17,19],res:3,rescal:[3,11,14],rescale_b0:3,rescaleb0:3,research:16,resourc:1,resource_monitor:[1,3,4,5],respons:[0,16],result:[1,8,16],resultinb:8,retval:1,revis:15,right:13,robust:16,roll:15,root:1,rootlogg:1,rstudio:8,rtol:5,run:[1,3,5,10,14,15,17,19],run_reconal:1,run_unique_id:1,run_uuid:1,runtim:1,same:17,save:15,scan:15,script:15,search:19,section:[0,16,17],secur:17,see:[1,17],seed:1,segment:16,select:1,sent:17,sentri:15,separ:10,septemb:16,seri:[3,19],serv:15,session:10,set:[1,10,13,15,16,17,19],sever:10,sha256:1,shape:8,share:17,sharpen:14,shell:8,should:[1,17],show:[15,17],signal:[3,11,14],simpleinterfac:[2,3,4,5],simpli:19,singl:[1,10,14],singleton:1,singular:[16,19],skiprow:5,skull:[1,11,14],skull_strip_fixed_se:1,skull_strip_templ:1,skull_stripped_fil:14,skullstrip:[15,16],sloppi:1,small:15,smoke:15,smriprep:15,snowbal:16,softwar:[16,17],some:[1,15,17],someth:17,sourc:[10,11,12,14],space:1,spatial:1,spatialrefer:1,spec:4,specif:[0,15],specifi:17,sphere:[8,14],spline:1,sprint:15,squar:8,stage:[11,12],standard:[1,14,16],start:[1,15,17],state:16,step:[1,14,15,16,17],stop:1,stop_on_first_crash:1,store:[1,13,19],str:[1,3,5,10,11,12,14],stream:17,string:1,strip:[1,11,14],structur:[1,8,14,17,19],sub:[1,10],subject:[1,10],subject_id:10,subjects_dir:10,subjectsummari:4,subjectsummaryinputspec:4,subjectsummaryoutputspec:4,submit:16,submodul:[0,16],suboptim:1,subpackag:[0,16],subprocess:1,summaryinterfac:4,summaryoutputspec:4,support:16,sure:17,surfac:1,surfer:19,suscept:1,svg:[10,11,12,14],system:[17,19],t1w:19,tabl:[5,8],tacc:17,tag:15,take:[11,14,19],target:[1,15],task:1,task_id:15,technolog:16,templat:[1,10],templateflow:1,templateflow_hom:1,templateflow_vers:1,tenant:17,termin:17,test:15,text:1,them:[11,14,15],therefor:17,thi:[1,10,11,12,14,15,16,17],thread:[11,14],threshold:8,time:[1,3],tip:17,tmpdir:[3,5],to_filenam:[1,8],tolist:8,toml:1,took:17,tool:[1,3,16,17,19],traceback:8,track:[1,15],tractographi:16,traitedspec:4,transpar:16,travisci:15,trick:[1,17],tsv:5,two:[10,17],txt:[1,19],type:8,typo:15,ubuntu:17,uncompress:1,under:[1,17],uniqu:1,unit:[8,15],unless:19,unwarp:16,updat:[15,16],upon:16,usag:[0,16,17],use:[11,14,16,17,19],use_syn:1,used:[1,17],useful:1,user:[1,17],uses:19,using:[1,3,10,11,14,17,19],util:[0,1,9,11,15,16],valid:[11,14,16,17,19],validate_input_dir:7,validation_report:[11,14],valu:[1,8,11,12,14],valueerror:8,variabl:[1,19],varieti:16,vec:8,vector:[0,2,6,11,12,15],verbos:1,version:[1,7,11,14,15,17],via:1,virtual:[1,16,17],visit:17,volum:[3,8,14],vstack:8,wai:17,warn:1,well:16,were:17,what:16,when:[1,19],whenev:1,where:[1,8,19],whether:[1,8,11,14],which:[1,8,16,17,19],whole:16,wide:1,within:17,without:16,work:[1,15,17,19],work_dir:1,workflow:[0,1,15,16,17,19],world:17,write:[1,8,13],write_derivative_descript:7,write_graph:1,written:[1,17],you:[17,19],your:[17,19],zenodo:15,zero:8},titles:["Library API (application program interface)","dmriprep.config package","dmriprep.interfaces package","dmriprep.interfaces.images module","dmriprep.interfaces.reports module","dmriprep.interfaces.vectors module","dmriprep.utils package","dmriprep.utils.bids module","dmriprep.utils.vectors module","dmriprep.workflows package","dmriprep.workflows.base module","dmriprep.workflows.dwi package","dmriprep.workflows.dwi.base module","dmriprep.workflows.dwi.outputs module","dmriprep.workflows.dwi.util module","What\u2019s new?","dMRIPrep","Installation","&lt;no title&gt;","Usage"],titleterms:{"1a0":15,"new":15,The:19,api:0,applic:0,argument:19,base:[10,12],bid:[7,19],cloud:17,command:19,commerci:17,config:1,configur:1,contain:17,content:16,decemb:15,depend:17,dmriprep:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,16],docker:17,dwi:[11,12,13,14],environ:17,execut:19,extern:17,format:19,freesurf:19,hpc:17,imag:3,instal:17,interfac:[0,2,3,4,5],januari:15,laptop:17,librari:0,licens:19,line:19,log:1,manual:17,modul:[3,4,5,7,8,10,12,13,14],novemb:15,other:1,output:13,packag:[1,2,6,9,11],prepar:17,program:0,python:17,recommend:17,report:4,respons:1,section:1,septemb:15,singular:17,submodul:[2,6,9,11],subpackag:9,technolog:17,usag:[1,19],util:[6,7,8,14],vector:[5,8],what:15,workflow:[9,10,11,12,13,14]}})