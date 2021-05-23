import fiservComp from '../../assets/fiserv.png';
import icreonComp from '../../assets/icreon.jpg';
import confluoComp from '../../assets/confluo.png';
import rraSoftComp from '../../assets/rrasoft.jpg';
import irctcComp from '../../assets/irctc.png';

const EmploymentHistory = () => {

    const employmentHistoryList = [
        {
            id: 1,
            companyName: 'Fiserv',
            designation: 'UI Architect',
            duration: `Nov'20 - Present`,
            icon: fiservComp
        },
        {
            id: 2,
            companyName: 'Icreon Communications Pvt. Ltd, Noida',
            designation: 'UI Architect',
            duration: `Dec'15 - Nov'20`,
            icon: icreonComp
        },
        {
            id: 3,
            companyName: 'Confluo eSolutions Pvt. Ltd, Noida',
            designation: 'Senior Software Engineer',
            duration: `June'15 - Dec'15`,
            icon: confluoComp
        },
        {
            id: 4,
            companyName: 'RRA Soft LLP, Ghaziabad',
            designation: 'Software Engineer',
            duration: `Dec'11 - June'15`,
            icon: rraSoftComp
        },
        {
            id: 5,
            companyName: 'IRCTC, New Delhi',
            designation: 'Web Develop',
            duration: `Jan'10 - Dec'11`,
            icon: irctcComp
        }
    ];

    return (
        <div className="custom-list">
            <div className="custom-list-wrapper">
                <div className="header-title">Employment History</div>
                <div className="heading-separator"></div>
                <div className="custom-list-box">
                    {employmentHistoryList.map((comp) => {
                        return <div className="custom-list-item" key={comp.id}>
                            <div className="hist-sec hist-sec-1 align-middle">
                                {comp.icon && <img src={comp.icon} className="emp-hist-img rounded-circle" alt={comp.name} />}
                            </div>
                            <div className="hist-sec emp-desc align-middle">
                                <div className="custom-list-item-title">{comp.companyName}
                                    <div className="float-end">
                                        <small className="text-muted">{comp.duration}</small>
                                    </div>

                                </div>
                                <div className="custom-list-item-sub-title">
                                    {comp.designation}

                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default EmploymentHistory;
